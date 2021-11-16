import {SurveyModel} from "../SurveyModel";
import {generateUniqSerial} from "../../../utils/GeneralUtils";

export const GeneralInformationGroup: SurveyModel = {
    id: generateUniqSerial(),
    surveyTitle: "Información General",
    backgroundColor: "#8f02a5",
    questionsGroups: [
        {
            id: "gender_birthday_question",
            questions: [
                {
                    id: "gender_question",
                    title: "¿Cuál es tu género?",
                    type: "select",
                    field: "gender",
                    options: [
                        {
                            id: "gender01",
                            value: "Masculino"
                        },
                        {
                            id: "gender02",
                            value: "Femenino"
                        },
                        {
                            id: "gender03",
                            value: "No binario"
                        }
                    ]
                },
                {
                    id: "birthday_question",
                    title: "¿Cuándo naciste?",
                    type: "date",
                    field: "birthday",
                }
            ]
        },
        {
            id: "address_question",
            questions: [
                {
                    id: generateUniqSerial(),
                    title: "¿Dónde vives actualmente?",
                    type: "address",
                    field: "address",
                }
            ]
        },
        {
            id: "contact_question",
            questions: [
                {
                    id: generateUniqSerial(),
                    title: "¿Cómo podemos contactarte?",
                    type: "multiple-inputs",
                    field: '',
                    inputs: [
                        {
                            id: "email_contact_question",
                            name: "email",
                            placeHolder: "algo@mail.com",
                            label: "Ingresa tu correo electrónico",
                            field: "email"
                        },
                        {
                            id: "phone_contact_question",
                            name: "teléfono celular a diez dígitos",
                            placeHolder: "(555) 555 5555",
                            label: "Ingresa tu número a 10 dígitos",
                            field: "phone"
                        }
                    ]
                }
            ]
        },
        {
            id: "electoral_question",
            questions: [
                {
                    id: "elector_key_question",
                    title: "Saca tu credencial de elector (recuerda que este campo es opcional). Si decides ponerlo nos ayudas a saber dónde tenemos presencia y a validar tu información.\nSi aún no cumples 18 años no te preocupes, puedes dejarlo vacío.",
                    type: "multiple-inputs",
                    field: "",
                    inputs: [
                        {
                            id: "elector_key_question00",
                            name: "Clave de elector",
                            placeHolder: "GMVLMR80070501M100",
                            label: "Ingresa clave",
                            field: "electorkey"
                        },
                        {
                            id: "elector_district_question01",
                            name: "Sección Electoral",
                            placeHolder: "0001",
                            label: "Ingresa Sección",
                            field: "electoralDistrict"
                        }
                    ]
                }
            ]
        }
    ]
}