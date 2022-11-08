import { GrWorkshop} from "react-icons/gr";
import SchoolDashboard from "../../SchoolDashboard";

const Forms = ( ) => {
    return ( 
       <div style={{display : "flex",minHeight : "100vh" }}>
            <SchoolDashboard />
            <div className="forms">
                <div className="teachStaff">
                        <GrWorkshop className="teachIcon"></GrWorkshop>
                        <h4> Students </h4>
                </div>
                <div className="teachStaff">
                        <GrWorkshop className="teachIcon"></GrWorkshop>
                        <h4> Parents </h4>
                </div>
                <div className="teachStaff">
                        <GrWorkshop className="teachIcon"></GrWorkshop>
                        <h4> Staff </h4>
                </div>
            </div>
       </div>
    );
}
 
export default Forms;