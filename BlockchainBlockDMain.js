import java.util.ArrayList;
public class Blockchain {

    ArrayList<Block> blockchain = new ArrayList<>();
    public static void main(String[] args) {
        String[] genesisTransactions = {"Suraj sent Ruja 1542 Bitcoins","Ruja sent 10 Bitcoins to John"};
        Block genesisBlock = new Block(0,genesisTransactions);
        System.out.println("Genesis Block Hash:"+genesisBlock.getBlockHash());
        String[] block2Transactions = {"John sent 10 bitcoins to Suraj","Suraj sent 10 bitcoins to Alex"};
        Block block2= new Block(genesisBlock.getBlockHash(), block2Transactions);
        System.out.println("Block2 Hash:"+block2.getBlockHash());
       String[] block3Transactions = {"Alex sent 999 bitcoins to non"};
       Block block3 = new Block(block2.getBlockHash(), block3Transactions);
       System.out.println("Block3 Hash:"+block3.getBlockHash());
    }        
}