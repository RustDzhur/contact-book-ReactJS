export const Main = () => {
    return (
        <div>
            <video loop autoPlay muted className='video' >
                <source src={require('../../video/headervideo.mp4')} type='video/mp4' />
            </video>
        </div>
    )
}