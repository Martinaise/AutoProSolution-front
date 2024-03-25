

const CreateOrEditServiceForm = ({formValues,handleSubmit,handleInputs,isNew}) => {
  return (
    <div className="card-body">
    <form onSubmit={handleSubmit}>
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label
              htmlFor="example-text-input"
              className="form-control-label"
            >
              Titre
            </label>
            <input
              className="form-control"
              type="text"
              name="service_name"
              onChange={handleInputs}
              value={formValues?.service_name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description du service
            </label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              onChange={handleInputs}
              value={formValues?.description}
            ></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="formFile" className="form-label">
              Choisir une image
            </label>
            <input
              className="form-control"
              type="file"
              id="formFile"
              name="pictures"
              onChange={handleInputs}
              accept="image/*"
            //   value={formValues?.pictures}
            />
          </div>
        </div>
      </div>
      <div className="pt-2">
        <button className="btn btn-facebook">Enregistrer</button>
      </div>
    </form>
  </div>
  )
}


export default CreateOrEditServiceForm