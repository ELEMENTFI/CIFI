    // CREATE ASSET
    // get changing network parameters for each transaction
    TransactionParametersResponse params = client.TransactionParams().execute().body();
    params.fee = (long) 1000;

    // Create the Asset:
    BigInteger assetTotal = BigInteger.valueOf(10000);
    boolean defaultFrozen = false;
    String unitName = "myunit";
    String assetName = "my longer asset name";
    String url = "http://this.test.com";
    String assetMetadataHash = "16efaa3924a6fd9d3a4824799a4ac65d";
    Address manager = acct2.getAddress();
    Address reserve = acct2.getAddress();
    Address freeze = acct2.getAddress();
    Address clawback = acct2.getAddress();
    Integer decimals = 0;
    Transaction tx = Transaction.AssetCreateTransactionBuilder().sender(acct1.getAddress()).assetTotal(assetTotal)
            .assetDecimals(decimals).assetUnitName(unitName).assetName(assetName).url(url)
            .metadataHashUTF8(assetMetadataHash).manager(manager).reserve(reserve).freeze(freeze)
            .defaultFrozen(defaultFrozen).clawback(clawback).suggestedParams(params).build();

    // Sign the Transaction with creator account
    SignedTransaction signedTx = acct1.signTransaction(tx);
    Long assetID = null;
    try {
        String id = submitTransaction(signedTx);
        System.out.println("Transaction ID: " + id);
        waitForConfirmation(id);
        // Read the transaction
        PendingTransactionResponse pTrx = client.PendingTransactionInformation(id).execute().body();
        // Now that the transaction is confirmed we can get the assetID
        assetID = pTrx.assetIndex;
        System.out.println("AssetID = " + assetID);
        printCreatedAsset(acct1, assetID);
        printAssetHolding(acct1, assetID);

    } catch (Exception e) {
        e.printStackTrace();
        return;
    }