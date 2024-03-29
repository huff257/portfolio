import deviceMockup from '../public/images/desktop_device.webp'
import fallback from '../public/images/winning.webp'
import lazyLoad from '../public/assets/js/lazy-load.js'

export default function Work({ title, size, addClass, content }) {

    return (
      <section className={addClass}>
        <h2>{title}</h2>
        <div className="pc_row">
          {Object.values(content).map((key, index) => {
            if(key['Mp4']){
              return (
                <div className="skills_card bg_white pc_box_shadow" style={{ flexGrow: 0, flexShrink: 0, flexBasis: size, maxWidth: size }}>
                  <div className="skills_text_wrapper">
                    <div className="pc_row justify-spc-btwn">
                      <div className="work-wrapper">
                        <img width="auto" height="auto" className="static-hover" src={deviceMockup.src} alt={key['DesktopAlt']} title={key['DesktopTitle']}></img>
                        <div className="static_wrapper">
                          <img width="auto" height="auto" className="static" src={key['Placeholder']} alt={key['PosterAlt']} title={key['PosterTitle']}></img>
                        </div>
                        <div className="gif_wrapper">
                          <video
                            autoPlay loop muted playsInline
                            className="lazy">
                            <source src={key['Mp4']} type="video/mp4" />                         
                          </video>                  
                        </div>
                      </div>
                    </div>
                    <h3>{key['Title']}</h3>
                    <p>{key['Description']}</p>
                  </div>
                </div>
              )
            }else{
              return (
                <div className="skills_card bg_white pc_box_shadow" style={{ flexGrow: 0, flexShrink: 0, flexBasis: size, maxWidth: size }}>
                  <div className="skills_text_wrapper">
                    <div className="pc_row justify-spc-btwn">
                      <div className="work-wrapper">
                          <img className="portfolio" width="410" height="200" src={key['Placeholder']} alt={key['PosterAlt']} title={key['PosterTitle']}></img>
                      </div>
                    </div>
                    <h3>{key['Title']}</h3>
                    <p>{key['Description']}</p>
                  </div>
                </div>
              )
            }
         })}
        </div>
      </section>
    )
  }