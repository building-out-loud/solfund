import { VStack, Text, Input, InputGroup, InputLeftAddon, Button, HStack, Tag    } from "@chakra-ui/react";
import { Web3Context } from "../context/web3context";
import { useContext } from "react";
import { BsArrowRight } from "react-icons/bs";
import CredForm from "./CredForm";

function RightSideBar() {
    const { phantomConnect, phantomDisconnect, currentAccount, provider } = useContext(Web3Context);
    
    return (
        <VStack px="20px" pr="80px" py="20px" height="100vh" borderLeft="1px solid #e5e5e5">
            {
                currentAccount ?
                <CredForm />
                :
                null
            }
            <VStack spacing={4} alignItems="flex-start" width="100%" border="1px solid #e5e5e5" borderRadius="12px" padding="20px">
                <Text>Activity</Text>
                <VStack spacing={2} alignItems="flex-start" width="100%">
                    <HStack width="100%" justifyContent="space-between">
                        <HStack>
                            <Text>EKy...qB1</Text>
                            <BsArrowRight />
                            <Text>6wk...cgQ</Text>
                        </HStack>
                        <Tag fontFamily="Roboto Mono" background="#0055f7" color="white">0.5 SOL</Tag>
                    </HStack>
                    <HStack width="100%" justifyContent="space-between">
                        <HStack>
                            <Text>58K...5EB</Text>
                            <BsArrowRight />
                            <Text>2kV...kpU</Text>
                        </HStack>
                        <Tag fontFamily="Roboto Mono" background="#0055f7" color="white">0.3 SOL</Tag>
                    </HStack>
                    <HStack width="100%" justifyContent="space-between">
                        <HStack>
                            <Text>5AX...qC7</Text>
                            <BsArrowRight />
                            <Text>DX1...p6v</Text>
                        </HStack>
                        <Tag fontFamily="Roboto Mono" background="#0055f7" color="white">0.3 SOL</Tag>
                    </HStack>
                </VStack>
            </VStack>
        </VStack>
    )
}

export default RightSideBar;