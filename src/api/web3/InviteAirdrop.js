import abis from 'src/abi/index';
import { counterStore } from 'src/store/Counter';
import config from 'src/api/utils/config';

const registerInviteAirdrop = function (abi = abis.InviteAirdropAbi, address = config.inviteAirdropContractAddress) {
    return new window.web3.eth.Contract(
        abi,
        address,
        { from: counterStore.userAddress }
    )
}

export const registryRewardOf = async () => {
    return registerInviteAirdrop().methods.registryRewardOf(counterStore.userAddress).call()
}
export const inviteRewardOf = async () => {
    return registerInviteAirdrop().methods.inviteRewardOf(counterStore.userAddress).call()
}

export const claimRegistryReward = async () => {
    return registerInviteAirdrop().methods.claimRegistryReward().send()
}

export const claimInviteReward = async () => {
    return registerInviteAirdrop().methods.claimInviteReward().send()
}