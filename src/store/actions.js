const GET_BALANCE = "GET_BALANCE";
const GET_TRANSACTIONS = "GET_TRANSACTIONS";
const address = "0xA145ac099E3d2e9781C9c848249E2e6b256b030D";
const api = "HFDJ8PG52U1D2A4VXD4JWY2JBT5BRWNXRP";

// function getAllInfo(data) {
//     return {
//       type: GET_ALL_INFO,
//       payload:data
//     };
//   }
export const getBalance = () => {
    return (dispatch) => {
        fetch(
            `https://api.etherscan.io/api?module=account&action=balancemulti&address=${address}&tag=latest&apikey=${api}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.message === "OK") {
                    dispatch({
                        type: GET_BALANCE,
                        payload: data.result[0],
                    });
                }
            });
    };
};
export const getTransactions = () => {
    return (dispatch) => {
        fetch(
            `https://api.etherscan.io/api?module=account&action=txlist&address=${address}&startblock=0&endblock=99999999&sort=asc&apikey=${api}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data);
                if (data.message === "OK") {
                    console.log(data);
                    dispatch({
                        type: GET_TRANSACTIONS,
                        payload: data.result[0],
                    });
                }
            });
    };
};
export const getAllInfo = () => {
    return (dispatch) => {
        dispatch(getTransactions());
    };
};
