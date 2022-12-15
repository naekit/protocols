import { DELETE_PROJECT } from "../mutations/projectMutations";
import { GET_PROJECTS } from "../queries/projectQueries";
import { useMutation } from "@apollo/client";
import { FaTrash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function DeleteProject({ id }) {
  const navigate = useNavigate()
  const [ deleteProject ] = useMutation(DELETE_PROJECT, {
    variables: { id },
    // refetching query method
    // refetchQueries: [{ query: GET_CLIENTS }],
    // update cache method
    refetchQueries: [{ query: GET_PROJECTS }],
  });

  const deleteClick = (e) => {
    e.preventDefault()
    deleteProject()
    navigate('/')
  }

  return (
      <button className="btn d-flex justify-content-center align-items-center btn-danger btn-sm" onClick={ deleteClick }>
          <FaTrash className="m-2" />
          <p className="m-2">Delete Project</p>
      </button>
  )
}
