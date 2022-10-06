const { sheet, auth } = require("../../config/sheet.config");
require('dotenv').config();

const addRow = async (req, res) => {
    try {
        let response = await sheet.spreadsheets.values.append({
            spreadsheetId: process.env.SHEETID,
            auth: auth,
            range: "Sheet1",
            valueInputOption: "RAW",
            includeValuesInResponse: true,
            requestBody: {
                values: [Object.values(req.body)]
            }
        })
        // console.log(response.data)
        return res.status(200).json(response.data.updates);
    } catch (err) {
        return res.status(500).json(err)
    }
}

const updateRow = async (req, res) => {
    try {
        let response = await sheet.spreadsheets.values.batchUpdateByDataFilter({
            spreadsheetId: process.env.SHEETID,
            auth: auth,
            requestBody: {
                valueInputOption: "RAW",
                data: [

                    {
                        majorDimension: 'ROWS',
                        dataFilter: {
                            a1Range: req.body.range
                        },
                        values: [Object.values(req.body.change)]
                    },
                ],

            }
        })
        return res.status(200).json(response.data.responses);
    } catch (err) {
        return res.status(500).json(err)

    }
}

module.exports = {
    addRow,
    updateRow
}