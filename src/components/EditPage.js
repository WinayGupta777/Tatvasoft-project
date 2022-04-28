import TitleBar from "./TitleBar";
import "./EditPage.css"

const EditPage=()=>{
    return(
        <div className="edit">
            <TitleBar title="Edit Product"/>
            <form>
                <div className="input-area">
                    <div>
                        <p>First Name *</p>
                        <input type="text" className="ibox" required></input>
                    </div>
                    <div>
                        <p>Last Name *</p>
                        <input type="text" className="ibox" required></input>
                    </div>
                    <div>
                        <p>Shop by Categories</p>
                        <input type="text" className="ibox"></input>
                    </div>
                    <div>
                        <p>Discription</p>
                        <input type="text" className="ibox"></input>
                    </div>
                    <div>
                        <input type="file" name="myfile" className="ibox" />
                    </div>
                </div>
                <div className="svcl">
                    <button type="submit">Save</button>
                    <button type="reset">Cancel</button>
                </div>
            </form>
        </div>
    );
}
export default EditPage;