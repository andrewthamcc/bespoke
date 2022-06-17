import { useState } from 'react'
import { mockActivities } from '../../mock-data'
import './activity-filter.scss'

export const ActivityFilter = ({ handleActivityFilter, activityMembers }) => {
  const [activityFilter, setActivityFilter] = useState('all')

  return (
    <div className="activity-filter">
      <p className="activity-filter-instructions">
        Filter Members By Activity:
      </p>
      <div className="activity-filter-controls">
        <label htmlFor="all-activities">All</label>
        <input
          type="radio"
          id="all-activities"
          name="all-activities"
          value={activityFilter}
          checked={activityFilter === 'all'}
          onChange={() => {
            setActivityFilter('all')
            handleActivityFilter('all')
          }}
        />
        {mockActivities.map((a) => (
          <div key={a.id}>
            <label htmlFor={a.id}>{a.activity}</label>
            <input
              type="radio"
              id={a.id}
              name={a.activity}
              value={a.id}
              checked={activityFilter === a.id}
              onChange={() => {
                setActivityFilter(a.id)
                handleActivityFilter(a.id)
              }}
            />
          </div>
        ))}
      </div>

      {activityMembers && (
        <p className="activity-filter-count"> <strong>{activityMembers}</strong> Members Partake in this Activity!</p>
      )}
    </div>
  )
}
