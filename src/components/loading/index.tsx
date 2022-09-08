import './styles.css'

export const Loading = () => {
    return (
        <div>
            <div className="title-container">
                <div className="spinner">
                    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="46" />
                    </svg>
                </div>
                <h1 className="title">loading...</h1>
            </div>
        </div>

    )
}