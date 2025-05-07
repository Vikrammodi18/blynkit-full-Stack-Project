class ApiError extends Error{

    constructor(
        status,
        message="something went wrong",
        errors= [],
        stack=""
    ){
        super(message)
        this.status = status;
        this.data = null;
        this.success= false;
        this.errors = errors;
    }
}

export default ApiError