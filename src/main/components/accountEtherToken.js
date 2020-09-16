import React from "react";
import axios from "axios";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";

export default class EtherToken extends React.Component {
    constructor() {
        super();
        this.state = {
            tokenData: [],
            rowsPerPage: 10,
            page: 0,
        };
    }
    componentDidMount() {
        axios
            .get(
                `https://api.etherscan.io/api?module=account&action=tokentx&address=${process.env.REACT_APP_ADDRESS}&startblock=0&endblock=999999999&sort=asc&apikey=${process.env.REACT_APP_API_TOKEN}`
            )
            .then((response) => {
                if (response.status === 200) {
                    this.setState({
                        tokenData: response.data.result.map((data) => {
                            const {
                                tokenName,
                                tokenSymbol,
                                value,
                                blockHash,
                            } = data;
                            return {
                                tokenName,
                                tokenSymbol,
                                value,
                                blockHash,
                            };
                        }),
                    });
                }
            })
            .catch((err) => console.log(err));
    }
    handleChangePage = (event, page) => {
        this.setState({ page });
    };

    handleChangeRowsPerPage = (event) => {
        this.setState({ page: 0, rowsPerPage: +event.target.value });
    };
    render() {
        console.log(this.state);
        const { tokenData, rowsPerPage, page } = this.state;
        const columns = [
            { id: "tokenName", label: "Name", minWidth: 250 },
            {
                id: "tokenSymbol",
                label: "Symbol",
                minWidth: 150,
                align: "right",
            },
            { id: "value", label: "Value", minWidth: 150, align: "right" },
        ];
        return (
            <Paper>
                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {tokenData
                                .slice(
                                    page * rowsPerPage,
                                    page * rowsPerPage + rowsPerPage
                                )
                                .map((row) => {
                                    return (
                                        <TableRow
                                            hover
                                            role="checkbox"
                                            tabIndex={-1}
                                            key={row.blockHash}
                                        >
                                            {columns.map((column) => {
                                                const value = row[column.id];
                                                return (
                                                    <TableCell
                                                        key={column.id}
                                                        align={column.align}
                                                    >
                                                        {column.format &&
                                                        typeof value ===
                                                            "number"
                                                            ? column.format(
                                                                  value
                                                              )
                                                            : value}
                                                    </TableCell>
                                                );
                                            })}
                                        </TableRow>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={tokenData.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onChangePage={this.handleChangePage}
                    onChangeRowsPerPage={this.handleChangeRowsPerPage}
                />
            </Paper>
        );
    }
}
