// Produces test objects

const names = ["AttentionInvalidPassNullParametar",
"SDCNotInitialisedWithPin",
"InvoiceTypeOutOfRange",
"TransactionTypeRandomLetters",
"PaymentTypeSpecialCharacters",
"PaymentTypeRandomText",
"DateTimeLettersOnly",
"DateTimeNumbersOnly",
"DateTimeSpecialCharactersOnly",
"ITFieldRandomText",
"ITFieldSpecialCharacters",
"RequiredPropertiesHaveRightType",
"HasRequiredProperties",
"RequiredPropertiesHaveValue",
"NonRequiredPropertiesHaveRightType",
"HasNonRequiredProperties",
"NonRequiredPropertiesHaveValue",
"GTINLettersOnly",
"GTINSpecialCharactersOnly",
"QuantityFieldSpecialCharactersOnly",
"QuantityCanNotContainLetters",
"UnitPriceFieldLettersOnly",
"UnitPriceSpecialCharactersOnly",
"TotalAmountFieldIsMissing",
"TotalAmountFieldEmpty"]

const getTest = (test) => {
    return {
        "testName": test,
        "testType": {
            "ApiTarget": "/api/Status/Attention",
            "RequestHeaders": "application/json",
            "Request": "{&amp;quot;ATT&amp;quot;: &amp;quot;Attention&amp;quot;}",
            "ResultHeaders": "application/json",
            "Result": "{&amp;quot;ATT_GSC&amp;quot;:&amp;quot;0000&amp;quot;}"
        },
        "testResults": { "ASSERT": "Success" }
    };
}

const tests = names.map(name => getTest(name));
console.log(tests);

