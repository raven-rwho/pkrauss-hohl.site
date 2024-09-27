import { ReactNode } from 'react'
import type { Authors } from 'contentlayer/generated'
import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'

interface Props {
    children: ReactNode
    content: Omit<Authors, '_id' | '_raw' | 'body'>
}

export default function ImprintLayout({ children }: Props) {

    return (
        <>
            <div className="divide-y divide-gray-200 dark:divide-gray-700">
                <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Imprint
                    </h1>
                </div>
                <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
                    <div className="prose max-w-none pb-8 pt-8 dark:prose-invert xl:col-span-2">
                        <p>Privacy policy of "p.krauss-hohl.site"</p>
                        <p>We are very pleased about your interest in "p.krauss-hohl.site". With this Privacy Policy, we aim to inform you about how, why and to what extent we process personal data, and what your rights are as a Data Subject.</p>
                        <ol>
                            <li>
                                <p>Data Controller</p>
                                Unless otherwise stated in this Privacy Policy, the Data Controller in accordance with Art. 4 no. 7 GDPR is Peter Krauß-Hohl, Oranienburg, info@p.kraus-hohl.site (hereinafter also “we” or “us”).
                            </li>
                            <li>
                                <p>Accessing the website</p>
                                When you use our offer, we set absolutely necessary cookies and collect and process the following information to enable the usability of the provided functions and to ensure the security and stability of our offer. Cookies are small text files that are transmitted from the Internet to your computer together with the data actually requested. This data is stored there and kept ready for later retrieval. We use cookies in particular for the collection of the following information:
                                <ul>
                                    <li>
                                        Information about the end device accessing the site and the software used
                                    </li>
                                    <li>
                                        Date and time of the access
                                    </li>
                                    <li>
                                        Websites from which the user has accessed our website or which the user accesses through our website
                                    </li>
                                    <li>
                                        IP address
                                    </li>
                                </ul>
                                The processing of your IP address is absolutely necessary to enable the delivery of our offer to your end device. The legal basis for data processing is Art. 6 para. 1 lit. b DSGVO. Our servers also store your IP address for up to 14 days for our own security purposes (Art. 6 para. 1 lit. f DSGVO).
                            </li>
                            <li>
                                <p>Contact initiated by you</p>
                                When you contact us, for example using one of our contact forms or e-mail addresses, the data that you provide (your e-mail address, possibly your name and your telephone number) will be processed by us for the purpose of responding to your enquiry. We will delete data collected in this connection once it is no longer required for the aforementioned purpose, unless the deletion of this data would contravene statutory retention obligations. The legal basis for data processing is provided by Art. 6 para. 1 sentence 1 point f GDPR.
                            </li>
                            <li>
                                <p>Cookies and similar Technologies</p>
                                In order to provide our offer and to ensure the security of the offer, the use of certain cookies and similar technologies is required (Essential). The use of these cookies is necessary so that we can provide the service you have requested. You can find more information about the aforementioned cookies below.
                                Cookies are small files that your browser stores on your device in a designated directory. They can be used, among other things, to determine whether you have visited a website before. Many cookies contain a so-called cookie ID. A cookie ID is a unique identifier of the cookie. It consists of a string of characters by which websites and servers can be assigned to the specific Internet browser in which the cookie was stored. This enables the websites and servers visited to distinguish the individual browser of the data subject from other Internet browsers that contain other cookies. A specific Internet browser can be recognized and identified via the unique cookie ID. Cookies cannot identify you as a person without additional information.
                                Further information about the cookies used or comparable technologies and our partners can be found below in this privacy policy. There you also have the option at any time to revoke your consent with effect for the future. Cookies that have already been set can also be deleted by you at any time using an Internet browser or other software programs. This is possible in all common Internet browsers. The duration of the cookies used is limited to a maximum of one year, unless otherwise specified.

                                The vast majority of the services or content of the third-party providers, however, are only loaded and the relevant data processing only takes place if you have previously declared your consent within the meaning of Art. 6 para. 1 lit. a DSGVO or, with regard to cookies and similar technologies, according to § 25 para. 1 TDDDG. In addition, there are a few cookies or similar technologies that are absolutely necessary to provide the service you requested (Section 25 (2) TDDDG) (special category absolutely necessary), as well as certain downstream data processing based on certain legitimate interests pursuant to. Art. 6 para. 1 lit. f DSGVO; the setting of cookies or data processing in these constellations is carried out without consent, although we give you the opportunity to object to the data processing based on Art. 6 para. 1 lit. f DSGVO.

                                "Example for subprocessor and cookie settings:
                                Multilingualism of the website
                                We use the Polylang programme for the multilingualism of our website. Polylang is a product of WP SYNTEX, 28, rue Jean Sebastien Bach, 38090 Villefontaine, France. Cookies from Polylang are only set to recognise and record the language used or chosen by the user. These cookies remain stored for one year and are then deleted. The legal basis for this is Art. 6 para. 1 lit. f DSGVO. Further information on data protection compliance can be found here: https://polylang.pro/doc/is-polylang-compatible-with-the-eu-cookie-law/."
                            </li>
                            <li>
                                <p>Storage Duration</p>
                                We will only process personal data as long as it is necessary for the relevant purpose stated above. Personal data will then be deleted unless data erasure is prohibited by a statutory retention period.
                            </li>
                            <li>
                                <p>Contact Details and your Rights as a Data Subject</p>
                                Should you have any queries or comments on data protection and privacy or wish to exercise your rights as a Data Subject, please contact our "Data Protection Officer/or the person itself" at any time:

                                <p>Peter Krauß-Hohl</p>
                                <p>Oranienburg</p>
                                <p>info@p.krauss-hohl.site</p>
                            </li>
                        </ol>
                        <h3>Information and Rectification</h3>

                        <p>You can receive information at any time and at no charge about whether we are processing personal data related to you and also about which information we are specifically storing about you. You are also entitled to receive a copy of the stored information. You can also have errors in your data corrected and missing information completed.</p>

                        <h3>Erasure, Restriction of processing and “Right to be forgotten”</h3>
                        <p>You can request that your data be erased and its processing restricted. Where erasure of your personal data is prohibited by statutory retention obligations, your data will be marked with the aim of restricting its future processing.</p>

                        <h3>Data Portability</h3>
                        <p>Where applicable, you also have the right to have your personal data transmitted to you or to another Data Controller in a structured, standardised and machine-readable format, as long as processing is performed on the basis of consent or contract using automated procedures. This does not apply, however, where the processing is necessary for the performance of a task carried out in the public interest or in the exercise of official authority vested in the controller. You also have the right to have the personal data transmitted directly from one Data Controller to another, provided that it is technically feasible to do so and does not infringe upon the rights and freedoms of other persons.</p>

                        <h3>Withdrawal of Consent, Objecting to processing</h3>
                        <p>You can withdraw your previously-given consent at any time with future effect by contacting the aforementioned address.</p>

                        <p>Moreover, you have the right to object to the processing of your personal data at any time (where such processing is based on a legitimate interest) for reasons arising from your particular circumstances. This also applies to profiling activities based on these provisions. If such an objection is received, we will cease to process the personal data unless we can demonstrate compelling legitimate grounds for the processing that override the interests, rights and freedoms of the Data Subject, of if the processing is for the establishment, exercise or defence of legal claims.</p>

                        <p>If we are processing personal data for the purpose of direct marketing, you have the right to object to the processing of your personal data at any time for the purpose of such marketing by contacting the aforementioned address. This also applies to profiling insofar as it is connected with such direct marketing. You also have the right to file an objection for reasons arising from your particular circumstances against processing of your personal data that we are engaged in for scientific, historical research or statistical purposes, unless such processing is required to perform a task that is in the public interest.</p>

                        <h3>Right of Complaint</h3>
                        <p>You also have the right to submit a complaint to the competent supervisory authority and to seek legal remedies. The supervisory authority with whom the complaint was lodged will notify the complainant about the status and result of their complaint, including the option of seeking a judicial remedy.</p>

                        <p>Last revised: 27th of July, 2024</p>
                    </div>
                </div>
            </div>
        </>
    )
}
