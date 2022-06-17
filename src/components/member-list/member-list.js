import { Member } from '..'
import PropTypes from 'prop-types'
import './member-list.scss'

export const MemberList = ({ members }) => {
  if (!members || members.length === 0) {
    return <p className="member-list-none">No members found!</p>
  }

  return (
    <div className="member-list">
      <ul>
        {members.map((m) => (
          <Member member={m} key={m.id} />
        ))}
      </ul>
    </div>
  )
}

MemberList.propTypes = {
  member: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      username: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      rating: PropTypes.number,
      last_activites: PropTypes.array,
    })
  ),
}
