// 
import React from 'react'

const inputClasses = "mt-1 block w-full p-2 border border-zinc-300 rounded-md shadow-sm"
const labelClasses = "block font-medium"


const TourForm = () => {
    return (      
        <div className="min-h-[90vh] w-full flex items-center justify-center py-16">
            <form className="bg-blue-100 p-5 rounded-lg flex flex-wrap gap-7 w-full lg:w-1/2 shadow-[0_0_10px_black]">
                    <div>
                        <label htmlFor="tour-plan" className={labelClasses}>Tour Plan</label>
                        <input type="text" id="tour-plan" className={inputClasses} />
                    </div>
                <div>
                    <label htmlFor="name" className={labelClasses}>Name</label>
                    <input type="text" id="name" className={inputClasses} />
                </div>
                <div>
                    <label htmlFor="country" className={labelClasses}>Pick Up Country / Nationality</label>
                    <input type="text" id="country" className={inputClasses} />
                </div>
                <div>
                    <label htmlFor="contact" className={labelClasses}>Contact No</label>
                    <input type="text" id="contact" className={inputClasses} />
                </div>
                <div>
                    <label htmlFor="email" className={labelClasses}>Email Address</label>
                    <input type="email" id="email" className={inputClasses} />
                </div>
                <div>
                    <label htmlFor="cab-required-for" className={labelClasses}>Cab Required For</label>
                    <select id="cab-required-for" className={inputClasses}>
                      <option>Select</option>
                        <option>Airport Transfer / Drop</option>
                        <option>Outstation Travel</option>
                        <option>One Way Drop</option>
                        <option>Multiple City Travel & Drop</option>
                        <option>Round Trip</option>
                        <option>Local Travel</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="pick-up-date" className={labelClasses}>Pick up Date & Time</label>
                    <input type="datetime-local" id="pick-up-date" className={inputClasses} />
                </div>
                <div>
                    <label htmlFor="pick-up-address" className={labelClasses}>Pick up Address with Landmark / Location</label>
                    <input type="text" id="pick-up-address" className={inputClasses} />
                </div>
                <div>
                    <label htmlFor="drop-date" className={labelClasses}>Drop Date & Time</label>
                    <input type="datetime-local" id="drop-date" className={inputClasses} />
                </div>
                <div>
                    <label htmlFor="drop-address" className={labelClasses}>Drop Address with Landmark / Location</label>
                    <input type="text" id="drop-address" className={inputClasses} />
                </div>
                <div>
                    <label htmlFor="cab-duration" className={labelClasses}>Cab Duration i.e. No of Days</label>
                    <input type="number" id="cab-duration" className={inputClasses} />
                </div>
                <div>
                    <label htmlFor="no-of-cab" className={labelClasses}>No of Cab Required</label>
                    <input type="number" id="no-of-cab" className={inputClasses} />
                </div>
                <div>
                    <label htmlFor="type-of-cab" className={labelClasses}>Type of Cab Required</label>
                    <input type="text" id="type-of-cab" className={inputClasses} />
                </div>
                <div>
                    <label htmlFor="no-of-persons" className={labelClasses}>No of Person(s) Travelling</label>
                    <input type="number" id="no-of-persons" className={inputClasses} />
                </div>
                <div>
                    <label htmlFor="traveling-with-infant" className={labelClasses}>Traveling with Infant (Below 5 Yrs) / Child (Above 5 Yrs)</label>
                    <select id="traveling-with-infant" className={inputClasses}>
                        <option>Select</option>
                        <option value="Infant">Infant</option>
                        <option value="Child">Child</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="other-requirements" className={labelClasses}>Any other Requirement</label>
                    <textarea id="other-requirements" className={inputClasses} rows="3"></textarea>
                </div>
                <button type="submit" className="px-4 py-2 w-full bg-blue-500 text-white rounded-md hover:bg-blue-600" onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    );
};

export default TourForm