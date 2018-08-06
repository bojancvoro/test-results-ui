// Array containing all tests

export default [
    {
       "testName": "AttentionInvalidPassNullParametar",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "SDCNotInitialisedWithPin",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "InvoiceTypeOutOfRange",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "TransactionTypeRandomLetters",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "PaymentTypeSpecialCharacters",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "PaymentTypeRandomText",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Fail"
       }
    },
    {
       "testName": "DateTimeLettersOnly",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "DateTimeNumbersOnly",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Fail"
       }
    },
    {
       "testName": "DateTimeSpecialCharactersOnly",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "ITFieldRandomText",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "ITFieldSpecialCharacters",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "RequiredPropertiesHaveRightType",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "HasRequiredProperties",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "RequiredPropertiesHaveValue",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "NonRequiredPropertiesHaveRightType",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Fail"
       }
    },
    {
       "testName": "HasNonRequiredProperties",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "NonRequiredPropertiesHaveValue",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "GTINLettersOnly",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "GTINSpecialCharactersOnly",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "QuantityFieldSpecialCharactersOnly",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Fail"
       }
    },
    {
       "testName": "QuantityCanNotContainLetters",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "UnitPriceFieldLettersOnly",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "UnitPriceSpecialCharactersOnly",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "TotalAmountFieldIsMissing",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    },
    {
       "testName": "TotalAmountFieldEmpty",
       "testType": {
          "ApiTarget": "/api/Status/Attention",
          "RequestHeaders": "application/json",
          "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
          "ResultHeaders": "application/json",
          "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
       },
       "testResults": {
          "ASSERT": "Success"
       }
    }
 ]