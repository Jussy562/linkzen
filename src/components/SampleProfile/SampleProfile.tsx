import { IconType } from 'react-icons';



interface Social {
  name: string;
  icon: IconType;
  link: string;
}

interface Article {
  title: string;
  link: string;
}

// enum ContentType {
//   Socials = 'Socials',
//   Articles = 'Articles',
// }

interface Header {
  contentType: string;
  content: Social[] | Article[];
}


interface Profile {
    
        name: string;
        title: string;
        bio: string;
        location: string;
        email: string;
        phone: string;
        image: string,
}

interface SampleProfileData {
    header: Header[];
    profile: Profile;
  }

 

function SampleProfile({ header, profile }: SampleProfileData) {
  function isSocial(content: Social | Article): content is Social {
    return (content as Social).name !== undefined;
  }
  // console.log(header)
  return (
    <div className="bg-white w-2/3 rounded-xl p-8 md:p-12 shadow-xl">
        <header className='w-full flex justify-center items-center mb-12'>
            
            <div className=' flex flex-col items-center'>
              <div className='w-1/3 flex justify-center  rounded-full circle-full mb-8'>
                  
                  <img src={profile.image} alt={profile.name} className='rounded-full border-4 border-[#ffa741] w-40 h-40' />
              
              </div>
              
              <div className='w-1/2 flex flex-col text-center items-center justify-center'>
              <h2 className='mb-2 text-black dark:text-white font-bold text-3xl'>{profile.name}</h2>
              <p className='mb-1 text-[#ffa741] dark:text-[#ffa741] font-semibold text-xl'>{profile.title}</p>
              <p className='text-gray-500 dark:text-gray-300 text-lg'>{profile.bio}</p>
              </div>
            </div>
        </header>
        <div className='flex flex-col items-center mt-20'>
            {
                header.map((content, index)=> {
                    return (
                        <div key={index} className='w-full'>
                            
                                {content.contentType === "Socials" && (
                                    <div className='w-full '>
                                        <h3 className='text-2xl font-semibold mb-4'>{content.contentType}</h3>
                                        <div className='flex flex-col gap-6 w-full'>
                                          {content.content.map((social, index) => {
                                              if (isSocial(social)) {
                                              return (
                                                  <li key={index}  className='flex flex-row justify-center items-center
                                                  text-xl bg-gray-100 hover:bg-gray-200 py-6 rounded-xl hover:shadow-lg'>
                                                  <social.icon/> <span className='ml-8'>{social.name}</span>
                                                  </li>
                                              );
                                              } else {
                                              return null;
                                              }
                                          })}
                                        </div>
                                    </div>
                                )}
                            
                             {content.contentType === "Articles" && (
                                    <div className='w-full mt-10'>
                                    <h3 className='text-2xl font-semibold mb-4'>{content.contentType}</h3>
                                    <div className='flex flex-col gap-6 w-full '>
                                      {content.content.map((article, index) => {
                                          if (!isSocial(article)) {
                                          return (
                                              <li key={index} 
                                              className='flex flex-row justify-center items-center
                                                    text-xl bg-gray-100 hover:bg-gray-200 py-6 rounded-xl hover:shadow-lg'>
                                              {article.title}
                                              </li>
                                          );
                                          } else {
                                          return null;
                                          }
                                      })}
                                    </div>
                                    </div>
                                )}
                                
                        </div>
                    )
                })
            }
        </div>
        <div className='mt-20'>
          <hr/>
          <div className='flex flex-row justify-center items-center mt-4'>
          <p  className="flex items-center text-black self-center text-sm font-bold whitespace-nowrap ">

            link
            <span className='text-[#ffa741]' >ZEN</span>
              
          </p>
          </div>
        </div>
    </div>
  )
}

export default SampleProfile;