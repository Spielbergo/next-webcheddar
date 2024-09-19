// Below is sloppy....clean it up
import Header from '../components/FeaturedImage.component';
import Layout from '../components/Layout';
import Link from 'next/link';

import styles from '../styles/privacy-policy-page.module.css'

const header = (
    <Header 
      title="Privacy Policy" 
      imageSrc="/header.webp" 
      alt="Privacy Policy Header Image" 
    />
  );

const PrivacyPolicy = () => {
    return (
        <Layout header={header}> 
            <section className={styles.privacy_policy__section}>
                <div className={styles.privacy_policy__container}>                    
                    <div>
                        <div>
                            <h2>Website Privacy Policy</h2>                            
                        </div>
                        
                        <p>
                            <strong>www.webcheddar.ca</strong>
                        </p>
                        <p>
                            Type of website: Company Blog
                            <br />
                            Effective date: 10th day of May, 2024
                        </p>
                        <p>
                            www.webcheddar.ca (the "Site") is owned and operated by Web Cheddar -
                            Websites - Social Media. 
                            <br />
                            They can be contacted at: <br />
                            <br />
                            <Link href="mailto:info@webcheddar.ca">info@webcheddar.ca</Link>
                            <br />
                            Toronto, Ontario
                        </p>
                        <br />
                    </div>
                    <div className={styles.terms_privacy__items_container}>
                    <div>        
                        <h3>Purpose</h3>
                        <p>The purpose of this privacy policy (this "Privacy Policy") is to inform users of our Site of the following:
                        </p>
                        <ul>
                            <li>
                            <span>The personal data we will collect;</span>
                            <br />
                            </li>
                            <li>
                            <span>Use of collected data;</span>
                            <br />
                            </li>
                            <li>
                            <span>Who has access to the data collected;</span>
                            <br />
                            </li>
                            <li>
                            <span>The rights of Site users; and</span>
                            <br />
                            </li>
                            <li>
                            <span>The Site's cookie policy.</span>
                            <br />
                            </li>
                        </ul>
                        <p>
                            This Privacy Policy applies in addition to the terms and conditions of
                            our Site.
                        </p>
                        <div>
                    </div>
                    </div>
                    <div>
                    <div>
                            <h3>Consent</h3>
                            <p>By using our Site users agree that they consent to:</p>
                            <ul>
                            <li>
                                <span>The conditions set out in this Privacy Policy; and</span>
                                <br />
                            </li>
                            <li>
                                <span>
                                The collection, use, and retention of the data listed in this
                                Privacy Policy.
                                </span>
                                <br />
                            </li>
                            </ul>
                        </div>
                    </div>
                    <div>                            
                            <h3>Personal Data We Collect</h3>
                            <p>We only collect data that helps us achieve the purpose set out in this
                            Privacy Policy. We will not collect any additional data beyond the data
                            listed below without notifying you first.
                            <br />
                        </p>
                    </div>
                    <div>
                            <h3>Data Collected Automatically</h3>
                            <br />
                            <p>When you visit and use our Site, we may automatically collect and store
                            the following information:</p>
                        <ul>
                            <li>
                            <span>Location;</span>
                            <br />
                            </li>
                            <li>
                            <span>Clicked links; and</span>
                            <br />
                            </li>
                            <li>
                            <span>Content viewed.</span>
                            <br />
                            </li>
                        </ul>
                    </div>
                    <div>
                            <h3>Data Collected in a Non-Automatic Way</h3>
                            <br />
                            <p>We may also collect the following data when you perform certain
                            functions on our Site:</p>
                        <ul>
                            <li>
                            <span>First and last name;</span>
                            <br />
                            </li>
                            <li>
                            <span>Email address; and</span>
                            <br />
                            </li>
                            <li>
                            <span>Auto fill data.</span>
                            <br />
                            </li>
                        </ul>
                        <p>This data may be collected using the following methods:</p>
                        <ul>
                            <li>
                            <span>Contact forms.</span>
                            <br />
                            </li>
                        </ul>
                    </div>
                    <div>                            
                            <h3>How We Use Personal Data</h3>
                            <p>Data collected on our Site will only be used for the purposes specified
                            in this Privacy Policy or indicated on the relevant pages of our Site.
                            We will not use your data beyond what we disclose in this Privacy
                            Policy.
                            <br />
                            <br />
                            The data we collect automatically is used for the following purposes:
                        </p>
                        <ul>
                            <li>
                            <span>Analytics.</span>
                            <br />
                            </li>
                        </ul>
                        <p>The data we collect when the user performs certain functions may be used    for the following purposes:</p>
                        <ul>
                            <li>
                            <span>Communication.</span>
                            <br />
                            </li>
                        </ul>
                    </div>
                    <div>      
                            <h3>Who We Share Personal Data With</h3>
                            <h3>Employees</h3>
                            <br />
                            <p>We may disclose user data to any member of our organization who
                            reasonably needs access to user data to achieve the purposes set out in
                            this Privacy Policy.</p>
                        <div>
                    </div>
                    <div>   
                    <div> 
                            <h3>Other Disclosures</h3>
                            <br />
                            <p>We will not sell or share your data with other third parties, except
                            in the following case:</p>
                            <ul>
                            <li>
                                <span>If the law requires it;</span>
                                <br />
                            </li>
                            <li>
                                <span>If it is required for any legal proceeding;</span>
                                <br />
                            </li>
                            <li>
                                <span>To prove or protect our legal rights; and</span>
                                <br />
                            </li>
                            <li>
                                <span>
                                To buyers or potential buyers of this company in the event that we
                                seek to sell the company.
                                </span>
                                <br />
                            </li>
                            </ul>
                            <p>
                            If you follow hyperlinks from our Site to another site, please note
                            that we are not responsible for and have no control over their privacy
                            policies and practices.
                            </p>
                        </div>
                    </div>    
                    </div>
                    <div>
                            <h3>How Long We Store Personal Data</h3>
                            <p>User data will be stored until the purpose the data was collected for
                            has been achieved.
                            <br />
                            <br />
                            You will be notified if your data is kept for longer than this period.
                        </p>
                    </div>
                    <div>                    
                            <h3>How We Protect Your Personal Data</h3>
                            <p>In order to protect your security, we use the strongest available
                            browser encryption and store all of our data on servers in secure
                            facilities. All data is only accessible to our employees. Our employees
                            are bound by strict confidentiality agreements and a breach of this
                            agreement would result in the employee's termination.
                            <br />
                            <br />
                            While we take all reasonable precautions to ensure that user data is
                            secure and that users are protected, there always remains the risk of
                            harm. The Internet as a whole can be insecure at times and therefore we
                            are unable to guarantee the security of user data beyond what is
                            reasonably practical.
                        </p>
                        </div>
                    <div>                               
                        <h3>Children</h3>
                            <p>We do not knowingly collect or use personal data from children under
                            13 years of age. If we learn that we have collected personal data from
                            a child under 13 years of age, the personal data will be deleted as
                            soon as possible. If a child under 13 years of age has provided us
                            with personal data their parent or guardian may contact our privacy
                            officer.</p>                        
                    </div>
                    
                    <div>                         
                        <h3>How to Access, Modify, Delete, or Challenge the Data Collected</h3>
                        <p>If you would like to know if we have collected your personal data, how
                            we have used your personal data, if we have disclosed your personal data
                            and to who we disclosed your personal data, or if you would like your
                            data to be deleted or modified in any way, please contact our privacy
                            officer here:
                            <br />
                            <br />
                            Web Chadder
                            <br />
                            <Link href="mailto:info@webcheddar.ca">info@webcheddar.ca</Link>
                            <br />
                            Toronto, Ontario
                            <br />
                        </p>
                        <br />
                     </div>
                    
                    
                        <div>
                                <h3>Do Not Track Notice</h3>
                                <p>Do Not Track ("DNT") is a privacy preference that you can set in
                            certain web browsers. We do not track the users of our Site over time
                            and across third party websites and therefore do not respond to
                            browser-initiated DNT signals.
                            </p>
                        </div>
<div>
                    <div>
                        
                                <h3>Cookie Policy</h3>
                            <p>A cookie is a small file, stored on a user's hard drive by a
                            website. Its purpose is to collect data relating to the user's
                            browsing habits. You can choose to be notified each time a cookie is
                            transmitted. You can also choose to disable cookies entirely in your
                            internet browser, but this may decrease the quality of your user
                            experience.</p>
                            <p>We use the following types of cookies on our Site:
                            </p>
                            <ul>
                            <li>
                                <h3>
                                <span>Analytical cookies</span>
                                </h3>
                                <br />
                                Analytical cookies allow us to improve the design and functionality
                                of our Site by collecting data on how you access our Site, for
                                example data on the content you access, how long you stay on our
                                Site, etc; and
                                <br />
                            </li>
                            <li>
                                <h3>
                                <span>Third-Party Cookies</span>
                                </h3>
                                <br />
                                Third-party cookies are created by a website other than ours. We may
                                use third-party cookies to achieve the following purposes:
                                <br />
                                <ul>
                                <li>
                                    <span>
                                    Monitor user preferences to tailor advertisements around their
                                    interests.
                                    </span>
                                    <br />
                                </li>
                                </ul>
                            </li>
                            </ul>
                        </div>
                    </div>
                    
                        <div>                      
                            <h3>Modifications</h3>
                            <p>This Privacy Policy may be amended from time to time in order to
                            maintain compliance with the law and to reflect any changes to our data
                            collection process. When we amend this Privacy Policy we will update the
                            "Effective Date" at the top of this Privacy Policy. We recommend that
                            our users periodically review our Privacy Policy to ensure that they are
                            notified of any updates. If necessary, we may notify users by email of
                            changes to this Privacy Policy.
                        </p>

                        </div>

                            
                </div>
                <div>
                            <h3>Contact Information</h3>
                            <p>If you have any questions, concerns or complaints, you can contact our
                            privacy officer, Web Chadder, at:
                            <br />
                            <br />
                            <Link href="mailto:info@webcheddar.ca">info@webcheddar.ca</Link>
                            <br />
                            Toronto, Ontario
                        </p>

                            </div>
                </div>                    
                
            </section>
        </Layout>
        
    )
}

export default PrivacyPolicy;