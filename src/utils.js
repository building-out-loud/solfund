import x from "./solfund_program.json";
import { Provider } from "@project-serum/anchor";
import { Connection } from "@solana/web3.js";
const anchor = require("@project-serum/anchor");
const { SystemProgram } = anchor.web3;

let _myAccount;

const connection = new Connection("https://api.devnet.solana.com");

export async function createCampaign(fundraiseTitle, fundraiseAmount, connection, wallet) {
  
  let idl = x;
  let programId = new anchor.web3.PublicKey('FtZHN4JynMytukLuUyFywAi8d1hDdxQLXjGUj5HVU1Tn');
  let program = new anchor.Program(idl, programId);


  const newProvider = new Provider(connection, wallet, "confirmed");
    // Configure the client to use the local cluster.
    anchor.setProvider(newProvider);
  
  //   it("Creates and initializes an account in a single atomic transaction (simplified)", async () => {
      // #region code-simplified
      // The program to execute.
  
      console.log(programId);
      console.log(idl);
      // Generate the program client from IDL.
  
      // Address of the deployed program.
  
      // console.log(provider);
  
      // The Account to create.
      const myAccount = anchor.web3.Keypair.generate();
      console.log("ma", myAccount);
      _myAccount = myAccount;
  
      // Create the new account and initialize it with the program.
      // #region code-simplified
      // 1420 is the donation amount.
      // fundraise title in the string part.
      console.log(newProvider);
      // console.log(provider.publicKey.toString());
      const tx = await program.rpc.initialize(new anchor.BN(fundraiseAmount), fundraiseTitle.toString(), {
        accounts: {
          myAccount: myAccount.publicKey,
          user: newProvider.wallet.publicKey,
          systemProgram: SystemProgram.programId,
        },
        signers: [myAccount],
      });
      // #endregion code-simplified
      console.log(tx);
      // Fetch the newly created account from the cluster.
      // console.log("Account :", account);
      
      // Check it's state was initialized.
    //   assert.ok(account.data == "hi".toString());
    //   assert.ok(account.amount.eq(new anchor.BN(1420)));
  
}

export async function getFundraiseTitle() {
    let accountId = new anchor.web3.PublicKey('4qW84mPAfE7njFC1kWpjiGNcVUb144DgfExaB1oFWvoR');
    let account = await connection.getAccountInfo(accountId);
    console.log(account.amount);
    var string = new TextDecoder().decode(account.amount);
    console.log(string);
    return account.data;
}

export function donate(fundraiseTitle, donator, amount, receiver) {

}

  // Use a local provider.
  

    // Store the account for the next test.

//   });

//   it("Updates a previously created account", async () => {
//     const myAccount = _myAccount;

//     // #region update-test

//     // The program to execute.
//     const idl = JSON.parse(require('fs').readFileSync('/Users/shreykeny/Desktop/anchor/examples/tutorial/basic-0/target/idl/basic_0.json', 'utf8'));

//     // Address of the deployed program.
//     // const programId = new anchor.web3.PublicKey('3cJs7BaJvCmzosq4oPf9FGGraqiQto8SBDKZZ1svu88X');
//     const programId = new anchor.web3.PublicKey('FtZHN4JynMytukLuUyFywAi8d1hDdxQLXjGUj5HVU1Tn');
//     console.log(programId);

//     // Generate the program client from IDL.
//     const program = new anchor.Program(idl, programId);


//     // Invoke the update rpc.
//     await program.rpc.update(new anchor.BN(1142), "bye".toString(), {
//       accounts: {
//         myAccount: myAccount.publicKey,
//       },
//     });

//     // Fetch the newly updated account.
//     const account = await program.account.myAccount.fetch(myAccount.publicKey);

//     // Check it's state was mutated.
//     assert.ok(account.data == "bye".toString());
//     console.log(account.amount.toNumber());
//     assert.ok(account.amount.eq(new anchor.BN(1142)));


//     // #endregion update-test
// //   });

// //   it("Sends SOL to PDA", async () => {
//     var connection = new web3.Connection(
//       web3.clusterApiUrl('devnet'),
//       'confirmed',
//     );

//     console.log("pw", provider.wallet.payer);
//     console.log("wallet", provider.wallet.publicKey);

//     const myAccount = _myAccount;

//     const programId = 'FtZHN4JynMytukLuUyFywAi8d1hDdxQLXjGUj5HVU1Tn';

//     var transaction = new web3.Transaction().add(
//       web3.SystemProgram.transfer({
//         fromPubkey: provider.wallet.publicKey,
//         toPubkey: _myAccount.publicKey,
//         lamports: web3.LAMPORTS_PER_SOL,
//       }),
//     );

//     // Sign transaction, broadcast, and confirm
//     var signature = await web3.sendAndConfirmTransaction(
//       connection,
//       transaction,
//       [provider.wallet.payer],
//     );
//     console.log('SIGNATURE', signature);


   

// //   it("Transfer", async () => {
//     const myAccount = _myAccount;

//     // #region update-test
//     const finalWallet = anchor.web3.Keypair.generate();

//     // The program to execute.
//     const idl = JSON.parse(require('fs').readFileSync('/Users/shreykeny/Desktop/anchor/examples/tutorial/basic-0/target/idl/basic_0.json', 'utf8'));

//     // Address of the deployed program.
//     // const programId = new anchor.web3.PublicKey('3cJs7BaJvCmzosq4oPf9FGGraqiQto8SBDKZZ1svu88X');
//     const programId = new anchor.web3.PublicKey('FtZHN4JynMytukLuUyFywAi8d1hDdxQLXjGUj5HVU1Tn');
//     console.log(programId);

//     // Generate the program client from IDL.
//     const program = new anchor.Program(idl, programId);


//     // Invoke the update rpc.
//     const tx = await program.rpc.transfer(new anchor.BN(1142), "bye".toString(), {
//       accounts: {
//         myAccount: myAccount.publicKey,
//         walletAddress: finalWallet.publicKey,
//       },
//     });

//     console.log("Tx", tx);
// //   });