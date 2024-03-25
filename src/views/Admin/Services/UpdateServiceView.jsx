import { useNavigate, useParams } from "react-router";
import CreateOrEditServiceForm from "../../../compenents/Admin/CreateOrEditServiceForm";
import { useEffect, useState } from "react";
import { getOneService, putOneService } from "../../../services/ourServices/services";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const UpdateServiceView = () => {
  const { id } = useParams();
  console.log(id);
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState();
  

  //récupérer les saisies d'un utilisateur dans les inputs
  const handleInputs = (event) => {
    const { name, value, files } = event.target;
    if (name === "pictures") {
      setFormValues({ ...formValues, [name]: files[0] });
      console.log("files[0]", files);
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };
  const getService = async (id) => {
    const { data } = await getOneService(id);
    const {description,picture,service_name} = data?.service[0];
    setFormValues({service_name,description,pictures:picture});
  };

  useEffect(() => {
    getService(id);
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await putOneService(id,formValues)
        if (result?.status===200 || result?.status===201) {
            setTimeout(() => {
                toast.success('👍Le service a été mise à jour !', {
                    position: "top-left",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            });
            setTimeout(() => { navigate("/admin/services") }, 3000);
        }
  };
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0 d-flex justify-content-between align-items-center">
            <h6>Mise à jour d&rsquo;un service</h6>
          </div>
          <CreateOrEditServiceForm
            handleInputs={handleInputs}
            handleSubmit={handleSubmit}
            formValues={formValues}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateServiceView;
