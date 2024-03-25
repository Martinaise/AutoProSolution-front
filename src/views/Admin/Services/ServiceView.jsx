import { useEffect, useState } from "react";
import {
  deleteOneService,
  getServices,
} from "../../../services/ourServices/services";
import { Link } from "react-router-dom";
import { truncateText } from "../../../helpers";
import Swal from "sweetalert2";

const ServiceView = () => {
  const [services, setServices] = useState([]);
  const deleteService = async (id) => {
    // console.log("test",id)

    Swal.fire({
      title: "supprimer un service !",
      text: "Etes-vous sûr de vouloir le supprimer ?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Quitter",
      confirmButtonText: "oui supprimé !",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await deleteOneService(id);
        if (response?.status === 201 || response?.status === 201) {
          const filteredServices = services.filter((service) => {
            console.log(service.id_service !== id);
            return service.id_service !== id;
          });
          setServices(filteredServices);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        }
      }
    });
  };

  const getAllServices = async () => {
    const { data } = await getServices();
    setServices(data?.services);
  };
  useEffect(() => {
    getAllServices();
  }, []);
  return (
    <div className="row">
      <div className="col-12">
        <div className="card mb-4">
          <div className="card-header pb-0 d-flex justify-content-between align-items-center">
            <h6>Liste des services</h6>
            <div>
              <Link to="/admin/new-service" className="btn btn-primary">
                Nouveau service
              </Link>
            </div>
          </div>
          <div className="ccard-body px-0 pt-0 pb-2">
            <div className="table-responsive p-0">
              <table className="table align-items-center mb-0">
                <thead>
                  <tr>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      #
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Nom
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Description
                    </th>
                    <th className="text-uppercase text-secondary text-xxs font-weight-bolder opacity-7">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {services &&
                    services.map((service, index) => (
                      <tr key={service?.id_service}>
                        <td className="px-4">{index + 1}</td>
                        <td className="px-4">{service.service_name}</td>
                        <td className="px-4" title={service.description}>
                          {truncateText(service.description, 18)}{" "}
                        </td>
                        <td className="px-4">
                          <Link
                            to={`/admin/update-service/${service.id_service}`}
                            className="btn btn-primary"
                          >
                            <span className="material-symbols-outlined">
                              edit
                            </span>
                          </Link>{" "}
                          &nbsp;&nbsp;
                          <Link className="btn btn-alert-secondary" to={`/admin/service-detail/${service.id_service}`}>
                            <span className="material-symbols-outlined">
                              visibility
                            </span>
                          </Link>
                          &nbsp;&nbsp;
                          <button
                            onClick={() => deleteService(service?.id_service)}
                            className="btn btn-danger"
                          >
                            <span className="material-symbols-outlined">
                              delete
                            </span>
                          </button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceView;
