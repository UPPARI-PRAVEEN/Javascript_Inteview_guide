const data = {
    alias: "kb",
    country: "India",
    currencyID: 5,
    gstDetail: {
      eInvoice: {
        applicableFrom: "2021-09-21",
        eInvoiceApplicable: "Yes",
      },
      eWayBill: {
        applicableFrom: "2021-10-22",
        enableGSTEwayBill: "Yes",
      },
      gstDetailHistories: [
        {
          applicableFrom: "2024-01-01",
          assesseeOfOtherTerritory: "Yes",
          enableGST: "Yes",
          gstDetailHistoryID: 0,
          gstin: "GSTIN283930",
          periodicityOfGSTR1: "Monthly",
          registrationType: "Regular",
          state: "Telangana",
        },
      ],
      gstDetailID: 0,
      gstTaxRates: [
        {
          additionalExpenseOrIncomeForSlabRate: "Yes",
          applicableFrom: "2024-01-04",
          cGST: "1.8",
          calculationType: "On Value",
          cess: "1.8",
          description: "Product description",
          enableNonAdValoremCESS: "No",
          gstGroupID: 1,
          gstTaxRateID: 0,
          hsnSAC: "995411",
          iGST: "1.8",
          ineligibleForInputCredit: "No",
          ratePerUnit: "0",
          rateType: "Sales/Purchases",
          reverseChargeApplicable: "No",
          sGST: "1.8",
          slabRates: [
            {
              cGST: "6",
              cess: "10",
              endRate: "100",
              iGST: "12",
              sGST: "12",
              slabRateID: 0,
              startRate: "0",
              taxability: "Taxable",
            },
          ],
          slabRatesPracice: [
            {
              cGST: "6ssssssssss",
              cess: "10",
              endRate: "100",
              iGST: "12",
              sGST: "12",
              slabRateID: 0,
              startRate: "0",
              taxability: "Taxable",
            },
          ],
          taxability: "Exempt",
          via: "Manual Entry",
        },
      ],
      isPrimary: "Yes",
      organizationAddressID: 1,
      preferences: {
        enableNonAdValoremCESS: "No",
        hsnSAC: "4",
      },
      registrationName: "Kitaab Technologies Pvt Ltd.",
    },
    legalName: "Kitaab",
    organizationID: 0,
    pan: "PAN23893",
  };

 // console.log(data)
// console.log(data.gstDetail.gstDetailHistories[0].applicableFrom)
 console.log(data.gstDetail.gstTaxRates[0].slabRates[1].add)
