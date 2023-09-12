import { useState } from "react";
import "./index.css";
import { ToastContainer, toast } from "react-toastify";
import { FaTrashAlt,FaPen } from "react-icons/fa";
function App() {
  const notify = (msg, type) => {
    if (type === "info") {
      toast.info(msg, {});
    }
    if (type === "success") {
      toast.success(msg, {});
    }
    if (type === "error") {
      toast.error(msg, {});
    }
  };

  // --------------- creating data functions -----------------

  const [data, setData] = useState([]);
  const [formdata, setFormdata] = useState({
    name: "",
    section: "",
    agreeTerms: false,
  });
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event) => {
    const selectedText = event.target.options[event.target.selectedIndex].text;
    setSelectedOption(selectedText);
    setFormdata((prevFormData) => ({
      ...prevFormData,
      section: selectedText.trim(),
    }));
  };
  const handleOnchange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleToggle = () => {
    setFormdata((prevFormData) => ({
      ...prevFormData,
      agreeTerms: !prevFormData.agreeTerms,
    }));
  };
  const submitForm = (e) => {
    e.preventDefault();

    if (formdata.name !== "" && formdata.section !== "") {
      setData([...data, formdata]);
      return notify("Saved Data 🚀", "success");
    } else {
      notify("Make sure you fill correctly!", "error");
    }
  };

 // --------------- deleting data functions -----------------
  const handleDelete = (index) => {
    const updatedData = [...data];
    updatedData.splice(index, 1);
    setData(updatedData);
  };

  // --------------- updating data functions -----------------
  const [updatingData, setUpdatingData] = useState({
  
  });
  const [selectedUpdateOption, setSelectedUpdateOption] = useState("");

  const handleUpdateSelectChange = (event) => {
    const selectedText = event.target.options[event.target.selectedIndex].text;
    setSelectedUpdateOption(selectedText);
    setUpdatingData((prevFormData) => ({
      ...prevFormData,
      section: selectedText.trim(),
    }));
  };
  const handleUpdateOnchange = (e) => {
    setUpdatingData({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const handleUpdateToggle = () => {
    setUpdatingData((prevFormData) => ({
      ...prevFormData,
      agreeTerms: !prevFormData.agreeTerms,
    }));
  };


  const [updatingIndex,setUpdatingIndex]=useState("");

  const handleUpdate = (elm,index) => {
    setUpdatingIndex(index)
    console.log(elm);
    setUpdatingData({
      name: elm.name,
      section: elm.section,
      agreeTerms: elm.agreeTerms,
    })
   
    // console.log(data);
  };

  const handleSubmitUpdate=(e)=>{
    e.preventDefault();

    if (updatingData.name !== "" && updatingData.section !== "" && updatingIndex !=="") {
       const updatedData = [...data];
    const updatedObject = updatedData[updatingIndex];
  
    updatedObject.name = updatingData.name;
    updatedObject.section = updatingData.section;
    updatedObject.agreeTerms = updatingData.agreeTerms;
  
    setData(updatedData);
      return notify("Saved Data 🚀", "success");
    } else {
      notify("Make sure you fill correctly!", "error");
    }
  }
  

  return (
    <>
      <div className="row p-4 vh-100 w-100  d-flex justify-content-center ">
        <ToastContainer position="top-right" />
        <div className="col-sm-12 col-md-6">
          <form action="" onSubmit={submitForm}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                Please enter your name and pick the Sectors you are currently
                involved in.
              </label>
              <input
                type="text"
                onChange={(e) => handleOnchange(e)}
                className="form-control"
                name="name"
                placeholder="Your name..."
              />
            </div>
            <div className="mb-3">
            <label htmlFor="Sectors" className="form-label">
            Sectors
              </label>
            <select
              className="form-select"
              name="section"
              onChange={handleSelectChange}
              size="10"
            >
              <option value="1" disabled>
                Manufacturing
              </option>
              <option value="19">
                &nbsp;&nbsp;&nbsp;&nbsp;Construction materials
              </option>
              <option value="18">
                &nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics
              </option>
              <option value="6">
                &nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage
              </option>
              <option value="342" disabled>
                Bakery &amp; confectionery products
              </option>
              <option value="43">&nbsp;&nbsp;&nbsp;&nbsp;Beverages</option>
              <option value="42">
                &nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; fish products{" "}
              </option>
              <option value="40">
                &nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; meat products
              </option>
              <option value="39">
                &nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; dairy products{" "}
              </option>
              <option value="437">&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
              <option value="378">
                &nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp; snack food
              </option>
              <option value="13" disabled>
                Furniture
              </option>
              <option value="389">
                &nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna{" "}
              </option>
              <option value="385">&nbsp;&nbsp;&nbsp;&nbsp;Bedroom</option>
              <option value="390">
                &nbsp;&nbsp;&nbsp;&nbsp;Children’s room{" "}
              </option>
              <option value="98">&nbsp;&nbsp;&nbsp;&nbsp;Kitchen </option>
              <option value="101">&nbsp;&nbsp;&nbsp;&nbsp;Living room </option>
              <option value="392">&nbsp;&nbsp;&nbsp;&nbsp;Office</option>
              <option value="394">
                &nbsp;&nbsp;&nbsp;&nbsp;Other (Furniture)
              </option>
              <option value="341">&nbsp;&nbsp;&nbsp;&nbsp;Outdoor </option>
              <option value="99">
                &nbsp;&nbsp;&nbsp;&nbsp;Project furniture
              </option>
              <option value="12" disabled>
                Machinery
              </option>
              <option value="94">
                &nbsp;&nbsp;&nbsp;&nbsp;Machinery components
              </option>
              <option value="91">
                &nbsp;&nbsp;&nbsp;&nbsp;Machinery equipment/tools
              </option>
              <option value="224">
                &nbsp;&nbsp;&nbsp;&nbsp;Manufacture of machinery{" "}
              </option>
              <option value="97" disabled>
                Maritime
              </option>
              <option value="271">
                &nbsp;&nbsp;&nbsp;&nbsp;Aluminium and steel workboats{" "}
              </option>
              <option value="269">
                &nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht building
              </option>
              <option value="230">
                &nbsp;&nbsp;&nbsp;&nbsp;Ship repair and conversion
              </option>
              <option value="93">
                &nbsp;&nbsp;&nbsp;&nbsp;Metal structures
              </option>
              <option value="508">&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
              <option value="227">
                &nbsp;&nbsp;&nbsp;&nbsp;Repair and maintenance service
              </option>
              <option value="11">&nbsp;&nbsp;&nbsp;&nbsp;Metalworking</option>
              <option value="67">
                &nbsp;&nbsp;&nbsp;&nbsp;Construction of metal structures
              </option>
              <option value="263">
                &nbsp;&nbsp;&nbsp;&nbsp;Houses and buildings
              </option>
              <option value="267">
                &nbsp;&nbsp;&nbsp;&nbsp;Metal products
              </option>
              <option value="542">&nbsp;&nbsp;&nbsp;&nbsp;Metal works</option>
              <option value="75">&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining</option>
              <option value="62">
                &nbsp;&nbsp;&nbsp;&nbsp;Forgings, Fasteners{" "}
              </option>
              <option value="69">
                &nbsp;&nbsp;&nbsp;&nbsp;Gas, Plasma, Laser cutting
              </option>
              <option value="66">
                &nbsp;&nbsp;&nbsp;&nbsp;MIG, TIG, Aluminum welding
              </option>
              <option value="9" disabled>
                Plastic and Rubber
              </option>
              <option value="54">&nbsp;&nbsp;&nbsp;&nbsp;Packaging</option>
              <option value="556">&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods</option>
              <option value="559">
                &nbsp;&nbsp;&nbsp;&nbsp;Plastic processing technology
              </option>
              <option value="55">&nbsp;&nbsp;&nbsp;&nbsp;Blowing</option>
              <option value="57">&nbsp;&nbsp;&nbsp;&nbsp;Moulding</option>
              <option value="53">
                &nbsp;&nbsp;&nbsp;&nbsp;Plastics welding and processing
              </option>
              <option value="560">
                &nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles
              </option>
              <option value="5" disabled>
                Printing{" "}
              </option>
              <option value="148">&nbsp;&nbsp;&nbsp;&nbsp;Advertising</option>
              <option value="150">
                &nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals printing
              </option>
              <option value="145">
                &nbsp;&nbsp;&nbsp;&nbsp;Labelling and packaging printing
              </option>
              <option value="7" disabled>
                Textile and Clothing
              </option>
              <option value="44">&nbsp;&nbsp;&nbsp;&nbsp;Clothing</option>
              <option value="45">&nbsp;&nbsp;&nbsp;&nbsp;Textile</option>
              <option value="8" disabled>
                Wood
              </option>
              <option value="337">&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)</option>
              <option value="51">
                &nbsp;&nbsp;&nbsp;&nbsp;Wooden building materials
              </option>
              <option value="47">&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses</option>
              <option value="3" disabled>
                Other
              </option>
              <option value="37">
                &nbsp;&nbsp;&nbsp;&nbsp;Creative industries
              </option>
              <option value="29">
                &nbsp;&nbsp;&nbsp;&nbsp;Energy technology
              </option>
              <option value="33">&nbsp;&nbsp;&nbsp;&nbsp;Environment</option>
              <option value="2" disabled>
                Service
              </option>
              <option value="25">
                &nbsp;&nbsp;&nbsp;&nbsp;Business services
              </option>
              <option value="35">&nbsp;&nbsp;&nbsp;&nbsp;Engineering</option>
              <option value="28">
                &nbsp;&nbsp;&nbsp;&nbsp;Information Technology and
                Telecommunications
              </option>
              <option value="581">
                &nbsp;&nbsp;&nbsp;&nbsp;Data processing, Web portals,
                E-marketing
              </option>
              <option value="576">
                &nbsp;&nbsp;&nbsp;&nbsp;Programming, Consultancy
              </option>
              <option value="121">
                &nbsp;&nbsp;&nbsp;&nbsp;Software, Hardware
              </option>
              <option value="122">
                &nbsp;&nbsp;&nbsp;&nbsp;Telecommunications
              </option>
              <option value="22" disabled>
                Tourism
              </option>
              <option value="141">
                &nbsp;&nbsp;&nbsp;&nbsp;Translation services
              </option>
              <option value="21">
                &nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics
              </option>
              <option value="111">&nbsp;&nbsp;&nbsp;&nbsp;Air</option>
              <option value="114">&nbsp;&nbsp;&nbsp;&nbsp;Rail</option>
              <option value="112">&nbsp;&nbsp;&nbsp;&nbsp;Road</option>
              <option value="113">&nbsp;&nbsp;&nbsp;&nbsp;Water</option>
            </select>
            </div>
            <div className="form-check mt-4">
              <input
                className="form-check-input"
                type="checkbox"
                name="agreeTerms"
                onChange={handleToggle}
                value={formdata.agreeTerms}
                id="terms"
              />
              <label className="form-check-label" htmlFor="teerms">
                Agree to terms
              </label>
            </div>
            <button type="submit" className="btn btn-success mt-4 mb-4">
              Create
            </button>
          </form>
        </div>
        <div className="col-sm-12 col-md-6 ">
          
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Section</th>
                <th scope="col">terms</th>
                <th colSpan="2" scope="col-span-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((elm, ind) => (
                <tr key={ind}>
                  <th scope="row">{ind+1}</th>
                  <td>{elm.name}</td>
                  <td>{elm.section}</td>
                  <td>{elm.agreeTerms.toString()}</td>
                  <td><span onClick={()=>{handleUpdate(elm,ind)}} data-bs-toggle="modal" data-bs-target="#exampleModal"><FaPen/></span></td>
                  <td><span className="cursor-pointer" onClick={() => handleDelete(ind)}><FaTrashAlt/></span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* <!-- Modal --> */}
<div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Update</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form action="" onSubmit={handleSubmitUpdate}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">
                update Your name
              </label>
              <input
                type="text"
                onChange={(e) => handleUpdateOnchange(e)}
                className="form-control"
                name="name"
                value={updatingData?.name}
                placeholder="Your name..."
              />
            </div>
            <div className="mb-3">
            <label htmlFor="Sectors" className="form-label">
               update Sectors
              </label>
            <select
              className="form-select"
              name="section"
              onChange={handleUpdateSelectChange}
              size="10"
            >
              <option value="1" disabled>
                Manufacturing
              </option>
              <option value="19">
                &nbsp;&nbsp;&nbsp;&nbsp;Construction materials
              </option>
              <option value="18">
                &nbsp;&nbsp;&nbsp;&nbsp;Electronics and Optics
              </option>
              <option value="6">
                &nbsp;&nbsp;&nbsp;&nbsp;Food and Beverage
              </option>
              <option value="342" disabled>
                Bakery &amp; confectionery products
              </option>
              <option value="43">&nbsp;&nbsp;&nbsp;&nbsp;Beverages</option>
              <option value="42">
                &nbsp;&nbsp;&nbsp;&nbsp;Fish &amp; fish products{" "}
              </option>
              <option value="40">
                &nbsp;&nbsp;&nbsp;&nbsp;Meat &amp; meat products
              </option>
              <option value="39">
                &nbsp;&nbsp;&nbsp;&nbsp;Milk &amp; dairy products{" "}
              </option>
              <option value="437">&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
              <option value="378">
                &nbsp;&nbsp;&nbsp;&nbsp;Sweets &amp; snack food
              </option>
              <option value="13" disabled>
                Furniture
              </option>
              <option value="389">
                &nbsp;&nbsp;&nbsp;&nbsp;Bathroom/sauna{" "}
              </option>
              <option value="385">&nbsp;&nbsp;&nbsp;&nbsp;Bedroom</option>
              <option value="390">
                &nbsp;&nbsp;&nbsp;&nbsp;Children’s room{" "}
              </option>
              <option value="98">&nbsp;&nbsp;&nbsp;&nbsp;Kitchen </option>
              <option value="101">&nbsp;&nbsp;&nbsp;&nbsp;Living room </option>
              <option value="392">&nbsp;&nbsp;&nbsp;&nbsp;Office</option>
              <option value="394">
                &nbsp;&nbsp;&nbsp;&nbsp;Other (Furniture)
              </option>
              <option value="341">&nbsp;&nbsp;&nbsp;&nbsp;Outdoor </option>
              <option value="99">
                &nbsp;&nbsp;&nbsp;&nbsp;Project furniture
              </option>
              <option value="12" disabled>
                Machinery
              </option>
              <option value="94">
                &nbsp;&nbsp;&nbsp;&nbsp;Machinery components
              </option>
              <option value="91">
                &nbsp;&nbsp;&nbsp;&nbsp;Machinery equipment/tools
              </option>
              <option value="224">
                &nbsp;&nbsp;&nbsp;&nbsp;Manufacture of machinery{" "}
              </option>
              <option value="97" disabled>
                Maritime
              </option>
              <option value="271">
                &nbsp;&nbsp;&nbsp;&nbsp;Aluminium and steel workboats{" "}
              </option>
              <option value="269">
                &nbsp;&nbsp;&nbsp;&nbsp;Boat/Yacht building
              </option>
              <option value="230">
                &nbsp;&nbsp;&nbsp;&nbsp;Ship repair and conversion
              </option>
              <option value="93">
                &nbsp;&nbsp;&nbsp;&nbsp;Metal structures
              </option>
              <option value="508">&nbsp;&nbsp;&nbsp;&nbsp;Other</option>
              <option value="227">
                &nbsp;&nbsp;&nbsp;&nbsp;Repair and maintenance service
              </option>
              <option value="11">&nbsp;&nbsp;&nbsp;&nbsp;Metalworking</option>
              <option value="67">
                &nbsp;&nbsp;&nbsp;&nbsp;Construction of metal structures
              </option>
              <option value="263">
                &nbsp;&nbsp;&nbsp;&nbsp;Houses and buildings
              </option>
              <option value="267">
                &nbsp;&nbsp;&nbsp;&nbsp;Metal products
              </option>
              <option value="542">&nbsp;&nbsp;&nbsp;&nbsp;Metal works</option>
              <option value="75">&nbsp;&nbsp;&nbsp;&nbsp;CNC-machining</option>
              <option value="62">
                &nbsp;&nbsp;&nbsp;&nbsp;Forgings, Fasteners{" "}
              </option>
              <option value="69">
                &nbsp;&nbsp;&nbsp;&nbsp;Gas, Plasma, Laser cutting
              </option>
              <option value="66">
                &nbsp;&nbsp;&nbsp;&nbsp;MIG, TIG, Aluminum welding
              </option>
              <option value="9" disabled>
                Plastic and Rubber
              </option>
              <option value="54">&nbsp;&nbsp;&nbsp;&nbsp;Packaging</option>
              <option value="556">&nbsp;&nbsp;&nbsp;&nbsp;Plastic goods</option>
              <option value="559">
                &nbsp;&nbsp;&nbsp;&nbsp;Plastic processing technology
              </option>
              <option value="55">&nbsp;&nbsp;&nbsp;&nbsp;Blowing</option>
              <option value="57">&nbsp;&nbsp;&nbsp;&nbsp;Moulding</option>
              <option value="53">
                &nbsp;&nbsp;&nbsp;&nbsp;Plastics welding and processing
              </option>
              <option value="560">
                &nbsp;&nbsp;&nbsp;&nbsp;Plastic profiles
              </option>
              <option value="5" disabled>
                Printing{" "}
              </option>
              <option value="148">&nbsp;&nbsp;&nbsp;&nbsp;Advertising</option>
              <option value="150">
                &nbsp;&nbsp;&nbsp;&nbsp;Book/Periodicals printing
              </option>
              <option value="145">
                &nbsp;&nbsp;&nbsp;&nbsp;Labelling and packaging printing
              </option>
              <option value="7" disabled>
                Textile and Clothing
              </option>
              <option value="44">&nbsp;&nbsp;&nbsp;&nbsp;Clothing</option>
              <option value="45">&nbsp;&nbsp;&nbsp;&nbsp;Textile</option>
              <option value="8" disabled>
                Wood
              </option>
              <option value="337">&nbsp;&nbsp;&nbsp;&nbsp;Other (Wood)</option>
              <option value="51">
                &nbsp;&nbsp;&nbsp;&nbsp;Wooden building materials
              </option>
              <option value="47">&nbsp;&nbsp;&nbsp;&nbsp;Wooden houses</option>
              <option value="3" disabled>
                Other
              </option>
              <option value="37">
                &nbsp;&nbsp;&nbsp;&nbsp;Creative industries
              </option>
              <option value="29">
                &nbsp;&nbsp;&nbsp;&nbsp;Energy technology
              </option>
              <option value="33">&nbsp;&nbsp;&nbsp;&nbsp;Environment</option>
              <option value="2" disabled>
                Service
              </option>
              <option value="25">
                &nbsp;&nbsp;&nbsp;&nbsp;Business services
              </option>
              <option value="35">&nbsp;&nbsp;&nbsp;&nbsp;Engineering</option>
              <option value="28">
                &nbsp;&nbsp;&nbsp;&nbsp;Information Technology and
                Telecommunications
              </option>
              <option value="581">
                &nbsp;&nbsp;&nbsp;&nbsp;Data processing, Web portals,
                E-marketing
              </option>
              <option value="576">
                &nbsp;&nbsp;&nbsp;&nbsp;Programming, Consultancy
              </option>
              <option value="121">
                &nbsp;&nbsp;&nbsp;&nbsp;Software, Hardware
              </option>
              <option value="122">
                &nbsp;&nbsp;&nbsp;&nbsp;Telecommunications
              </option>
              <option value="22" disabled>
                Tourism
              </option>
              <option value="141">
                &nbsp;&nbsp;&nbsp;&nbsp;Translation services
              </option>
              <option value="21">
                &nbsp;&nbsp;&nbsp;&nbsp;Transport and Logistics
              </option>
              <option value="111">&nbsp;&nbsp;&nbsp;&nbsp;Air</option>
              <option value="114">&nbsp;&nbsp;&nbsp;&nbsp;Rail</option>
              <option value="112">&nbsp;&nbsp;&nbsp;&nbsp;Road</option>
              <option value="113">&nbsp;&nbsp;&nbsp;&nbsp;Water</option>
            </select>
            </div>
            <div className="form-check mt-4">
              <input
                className="form-check-input"
                type="checkbox"
                name="agreeTerms"
                onChange={handleUpdateToggle}
                value={updatingData?.agreeTerms}
                id="terms"
              />
              <label className="form-check-label" htmlFor="teerms">
                Agree to terms
              </label>
            </div>
            <div className="modal-footer mt-2">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" className="btn btn-primary" data-bs-dismiss="modal">Save changes</button>
      </div>
          </form>
      </div>
      
    </div>
  </div>
</div>
      </div>
    </>
  );
}

export default App;
