import './member.scss'
import { mockActivities } from '../../mock-data'

export const Member = ({ member }) => {
  const parsedActivity = member.last_activity.map((a) =>
    mockActivities.find((ma) => ma.id === a)
  )

  return (
    <li className="member">
      <div className="member-card">
        <div className="member-card-top">
          <p className="member-name">{member.name}</p>
          <p className="member-email">{member.email}</p>
        </div>

        <div className="member-card-info">
          <p className="member-age">Age: {member.age}</p>
          <p className="member-rating">
            Rating: {member.rating} / 5{' '}
            <span className={`member-rating-icon-${member.rating >= 3 ? 'happy' : 'sad'}`}>
              {member.rating >= 3 ? ':)' : ':('}
            </span>
          </p>
        </div>

        <div className="member-card-activity">
          <p>Latest Activity:</p>
          <ol className="member-activity-list">
            {parsedActivity.map((a, index) => (
              <li className="member-activity-item" key={`${a.id}-${index}`}>
                {a.activity}
              </li>
            ))}
          </ol>
        </div>
      </div>
    </li>
  )
}
