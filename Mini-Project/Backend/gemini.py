import os
import google.generativeai as genai
from langchain.prompts import PromptTemplate
from dotenv import load_dotenv

load_dotenv(".env")


class Solution(object):
    def __init__(self) -> None:
        genai.configure(api_key="AIzaSyBUd99N6xQQmy-233yhwEJnLXH_4oNRJzE")
        
        generation_config={
                        'temperature':0.01, 
                        'max_output_tokens': 300
                    }
        
        safety_settings=[
            {
                "category": "HARM_CATEGORY_DANGEROUS",
                "threshold": "BLOCK_NONE",
            },
            {
                "category": "HARM_CATEGORY_HARASSMENT",
                "threshold": "BLOCK_NONE",
            },
            {
                "category": "HARM_CATEGORY_HATE_SPEECH",
                "threshold": "BLOCK_NONE",
            },
            {
                "category": "HARM_CATEGORY_SEXUALLY_EXPLICIT",
                "threshold": "BLOCK_NONE",
            },
            {
                "category": "HARM_CATEGORY_DANGEROUS_CONTENT",
                "threshold": "BLOCK_NONE",
            },
        ]
        
        self._model = genai.GenerativeModel('gemini-pro')
        
        self._prompt= "Make a some description about {location}"
        self._template = PromptTemplate(input_variables=['location'], 
                                        template=self._prompt)
          
                        
        
    def geminiResponse(self, location) -> str:
        try:
            self._response=self._model.generate_content([self._template.format(location=location)], stream=True)
                
            for chunk in self._response:
                self._response_ = ''.join(chunk.text) 
            
            #print(self._response_)
            return self._response_
        except:
            return False