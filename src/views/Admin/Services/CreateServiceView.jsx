import { useState } from "react";
import { createService } from "../../../services/ourServices/services";
import { useNavigate } from "react-router";
import CreateOrEditServiceForm from "../../../compenents/Admin/CreateOrEditServiceForm";

const CreateServiceView = () => {
  const [successMessage,setSucessMessage] = useState();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    service_name: "",
    description: "",
    pictures: "",
  });
  const handleInputs = (event) => {
    const { name, value, files } = event.target;
    if (name === "pictures") {
      setFormValues({...formValues,[name]:files[0]})
      console.log('files[0]',files)
    }else{
      setFormValues({...formValues,[name]:value})
    }
  };
  console.log("formValues",formValues)

  const handleSubmit=async (e)=>{
    e.preventDefault()
    const {data} = await createService(formValues);
    // console.log(!data?.message)
    if(data?.message){
      navigate('/admin/services')
    }
    setSucessMessage(data?.message)
  }
  console.log("successMessage",successMessage)
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0 d-flex justify-content-between align-items-center">
            <h6>Nouveau service</h6>
          </div>
            <CreateOrEditServiceForm handleInputs={handleInputs} handleSubmit={handleSubmit} formValues={formValues} isNew={true}/>
        </div>
      </div>
    </div>
  );
};

export default CreateServiceView;
