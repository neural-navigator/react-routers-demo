import { useParams } from "react-router-dom"

const UserDetails = () => {
    const {userId} = useParams()
  return (
    <div>
      Details of the user {userId}
    </div>
  )
}

export default UserDetails
