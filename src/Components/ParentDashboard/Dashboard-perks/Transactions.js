import ParentDashboard from "../Parent-Dashboard";

const Transactions = () => {
    return ( 
       <div  style={{display : "flex",minHeight : "100vh" }}>
            <ParentDashboard />
            <div className="transaction">
                <div>
                    <h3>Transactions</h3>
                </div>
                <div className="feeDiv"  >
                    <span> Outstanding Fee: </span>
                    <span className="school-fee">500,000 </span> <span className="ngn">NGN</span>
                </div>
                <div>
                    <h5 className="Transact-history">Transactions History</h5>
                    <div className="transaction-details">
                        <table>
                            <thead>
                                <tr>
                                    <td>S/N</td>
                                    <td>Date and Time</td>
                                    <td>Transaction details </td>
                                    <td>Amount</td>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>01</td>
                                    <td>Jan 04, 2022 <span>04:36pm</span>   </td>
                                    <td>First term Fees</td>
                                    <td>200,000 <span className="ngnTwo">NGN </span></td>
                                </tr>
                            </tbody>
                            <tbody>
                                <tr>
                                    <td>02</td>
                                    <td> Feb 23, 2022 <span>08:00am</span> </td>
                                    <td> First term Fees</td>
                                    <td> 100,000 <span className="ngnTwo">NGN </span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
       </div>
     );
}
 
export default Transactions;