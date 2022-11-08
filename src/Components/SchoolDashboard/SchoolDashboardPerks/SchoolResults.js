import SchoolDashboard from "../SchoolDashboard";

const SchoolResults = () => {
    return ( 
       <div style={{display : "flex",minHeight : "100vh" }}>
            <SchoolDashboard />
            <div className="schoolResults">
                <h2>Results</h2>
                <input type="search" placeholder="Enter name of the class" required className="searchClass" ></input> 
                <button>Submit</button>
                <table>
                    <thead>
                        <tr className="studentsThead">
                            <th>S/N</th>
                            <th>Name</th> 
                            <th>Mathematics</th> 
                            <th>English</th> 
                            <th>Basic Science </th>
                            <th>Computer Science </th>
                            <th>Visual Art </th>
                            <th>Business Studies</th>
                            <th>Yoruba</th>
                            <th>Total(%) </th>
                            <th>Comment</th>
                        </tr>
                    </thead>
                    <tbody>                      
                        <tr className="studentsThead">   
                            <td>1</td><td> Peter Israel Shola </td><td> 40 </td><td>40</td><td>40 </td>
                            <td>50 </td><td> 60 </td><td> 50 </td><td> 50 </td>
                            <td>80</td><td><input type="text" ></input></td>
                        </tr>
                        <tr className="studentsThead">   
                            <td>2</td><td> John Smith Segun </td><td> 40 </td><td>40</td><td>40 </td>
                            <td>50 </td><td> 60 </td><td> 50 </td><td> 50 </td><td>80</td><td><input type="text" ></input></td>
                        </tr>
                        <tr className="studentsThead">   
                            <td>3</td><td> Sean Paul Dayo </td><td> 40 </td><td>40</td><td>40 </td>
                            <td>50 </td><td> 60 </td><td> 50 </td><td> 50 </td><td>80</td><td><input type="text" ></input></td>
                        </tr>
                        <tr className="studentsThead">   
                            <td>4</td><td>Adamu Nnamdi Ayoola</td><td> 40 </td><td>40</td><td>40 </td>
                            <td>50 </td><td> 60 </td><td> 50 </td><td> 50 </td><td>80</td><td><input type="text" ></input></td>
                        </tr>
                        <tr className="studentsThead">   
                            <td>5</td><td> Coker Samuel OluShola </td><td> 40 </td><td>40</td><td>40 </td>
                            <td>50 </td><td> 60 </td><td> 50 </td><td> 50 </td><td>80</td><td><input type="text" ></input></td>
                        </tr>
                        <tr className="studentsThead">   
                            <td>6</td><td> Peter Israel Shola </td><td> 40 </td><td>40</td><td>40 </td>
                            <td>50 </td><td> 60 </td><td> 50 </td><td> 50 </td><td>80</td><td><input type="text" ></input></td>
                        </tr>
                        <tr className="studentsThead">   
                            <td>7</td><td> Peter Israel Shola </td><td> 40 </td><td>40</td><td>40 </td>
                            <td>50 </td><td> 60 </td><td> 50 </td><td> 50 </td><td>80</td><td><input type="text" ></input></td>
                        </tr>
                        <tr className="studentsThead">   
                            <td>8</td><td> Peter Israel Shola </td><td> 40 </td><td>40</td><td>40 </td>
                            <td>50 </td><td> 60 </td><td> 50 </td><td> 50 </td><td>80</td><td><input type="text" ></input></td>
                        </tr>
                        <tr className="studentsThead">   
                            <td>9</td><td> Peter Israel Shola </td><td> 40 </td><td>40</td><td>40 </td>
                            <td>50 </td><td> 60 </td><td> 50 </td><td> 50 </td><td>80</td><td><input type="text" ></input></td>
                        </tr>
                        <tr className="studentsThead">   
                            <td>10</td><td> Peter Israel Shola </td><td> 40 </td><td>40</td><td>40 </td>
                            <td>50 </td><td> 60 </td><td> 50 </td><td> 50 </td><td>80</td><td><input type="text" ></input></td>
                        </tr>
                        <tr className="studentsThead">   
                            <td>11</td><td> Peter Israel Shola </td><td> 40 </td><td>40</td><td>40 </td>
                            <td>50 </td><td> 60 </td><td> 50 </td><td> 50 </td><td>80</td><td><input type="text" ></input></td>
                        </tr>
                        <tr className="studentsThead">   
                            <td>12</td><td> Peter Israel Shola </td><td> 40 </td><td>40</td><td>40 </td>
                            <td>50 </td><td> 60 </td><td> 50 </td><td> 50 </td><td>80</td><td><input type="text" ></input></td>
                        </tr>
                        <tr className="studentsThead">   
                            <td>13</td><td> Peter Israel Shola </td><td> 40 </td><td>40</td><td>40 </td>
                            <td>50 </td><td> 60 </td><td> 50 </td><td> 50 </td><td>80</td><td><input type="text" ></input></td>
                        </tr>
                    </tbody>
                </table>
                <button className="upload">Upload Results</button>
            </div>
       </div>
    );
}
 
export default SchoolResults;