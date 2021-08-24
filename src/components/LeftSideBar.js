import { VStack, Text, HStack, Avatar, Tag, Button, Link, Box } from "@chakra-ui/react";
import { useContext } from "react";
import { MdAccountBalanceWallet } from "react-icons/md";
import { AiOutlineDisconnect } from "react-icons/ai";
import { Web3Context } from "../context/web3context";

function LeftSideBar() {
    const { phantomConnect, phantomDisconnect, currentAccount, provider } = useContext(Web3Context);

    return (
        <VStack justifyContent="space-between" borderRight="1px solid #e5e5e5" alignItems="flex-start" px="20px" pl="200px" py="20px" height="100vh">
            <VStack spacing={4} alignItems="flex-start">
                <Text>SolFund</Text>
                <Text>Home</Text>
                <Text>Update Profile</Text>              
            </VStack>
            <VStack alignItems="flex-start">
                <HStack>
                    {
                        currentAccount ?
                        <>
                            <Avatar name="Harpal Jadeja" borderRadius="7px" size="sm">
                    
                            </Avatar>
                            <Tag py="7px" background="#0055f7" color="white" fontFamily="Roboto Mono">
                                {`${currentAccount.substr(0,5)}...${currentAccount.substr(-5)}`}
                            </Tag>
                        </>
                        :
                        null
                    }
                </HStack>

                {
                    !provider ?
                    <Link target="_blank" href="https://phantom.app">
                        <Button size="sm" variant="phantom">Install Phantom Wallet</Button>
                    </Link> 
                    :
                    <>
                        {
                            currentAccount ?
                            <Button width="100%" size="sm" onClick={phantomDisconnect} leftIcon={<AiOutlineDisconnect />} variant="phantom">Disconnect</Button>
                            :
                            <Button width="100%" size="sm" onClick={phantomConnect} leftIcon={<MdAccountBalanceWallet />} variant="phantom">Connect Phantom</Button>
                        }
                    </> 
                }
            </VStack>
            
        </VStack>
    )
}

export default LeftSideBar;