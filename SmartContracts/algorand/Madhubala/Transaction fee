package algorandprogram.test;
import java.math.BigInteger;

import com.algorand.algosdk.account.Account;
import com.algorand.algosdk.algod.client.AlgodClient;
import com.algorand.algosdk.algod.client.ApiException;
import com.algorand.algosdk.algod.client.api.AlgodApi;
import com.algorand.algosdk.algod.client.auth.ApiKeyAuth;
import com.algorand.algosdk.algod.client.model.TransactionID;
import com.algorand.algosdk.algod.client.model.TransactionParams;
import com.algorand.algosdk.crypto.Digest;
import com.algorand.algosdk.transaction.SignedTransaction;
import com.algorand.algosdk.transaction.Transaction;
import com.algorand.algosdk.util.Encoder;

public class TransactionFee 
{   

    public static void main(String args[]) throws Exception {
        final String ALGOD_API_ADDR = "https://api.testnet.algoexplorer.io";
        final String ALGOD_API_TOKEN = " ";

        AlgodClient client = (AlgodClient) new AlgodClient().setBasePath(ALGOD_API_ADDR);
        ApiKeyAuth api_key = (ApiKeyAuth) client.getAuthentication("api_key");
        api_key.setApiKey(ALGOD_API_TOKEN);
        AlgodApi algodApiInstance = new AlgodApi(client);


        // Setup suggested parameters
        TransactionParams params = algodApiInstance.transactionParams();
        BigInteger suggestedFee = algodApiInstance.suggestedFee().getFee();
        BigInteger firstRound = params.getLastRound();
        BigInteger lastRound = firstRound.add(BigInteger.valueOf(1000));
        Digest genHash = new Digest(params.getGenesishashb64());

        // Shown for demonstration purposes. NEVER reveal secret mnemonics in practice.
        // These three accounts are for testing purposes
        final String account_mnemonic = "champion weather blame curtain " 
        + "thing strike despair month pattern unaware feel congress carpet "
        + "sniff palm predict olive talk mango toe teach jelly priority above squirrel";

        Account acct = new Account(account_mnemonic);   


        // Create transaction with either suggested fee
        // or flat fee 
        Transaction tx1 = Transaction.PaymentTransactionBuilder()
                .sender(acct1.getAddress())
                .receiver("GD64YIY3TWGDMCNPP553DZPPR6LDUSFQOIJVFDPPXWEG3FVOJCCDBBHU5A")
                .fee(suggestedFee)
                .amount(10000)
                .firstValid(firstRound)
                .lastValid(lastRound)
                .genesisHash(genHash)
                .build();
        SignedTransaction signedTx = acct1.signTransaction(tx1);;
        // Submit the transaction
        try {
            byte[] encodedTxBytes = Encoder.encodeToMsgPack(signedTx);
            TransactionID id = algodApiInstance.rawTransaction(encodedTxBytes);
            System.out.println("Successfully sent tx group with first tx id: " + id);
            } catch (ApiException e) {
                // This is generally expected, but should give us an informative error message.
                System.err.println("Exception when calling algod#rawTransaction: " + e.getResponseBody());
        }
    }
}