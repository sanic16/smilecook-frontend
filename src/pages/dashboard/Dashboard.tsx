import DashboardRecipes from "../../components/dashboard-recipe/DashboardRecipes"
import './dashboard.css'

const Dashboard = () => {
  return (
    <section className="dashboard">
        <div className="container dashboard__container">
            <DashboardRecipes />
        </div>
    </section>
  )
}

export default Dashboard