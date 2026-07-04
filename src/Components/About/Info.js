import { useEffect, useState } from "react";
import { BsAward, BsBriefcase, BsHeadset } from "react-icons/bs";

const Info = () => {
    const yearsOfExperience = new Date().getFullYear() - 2021;
    const [repoCount, setRepoCount] = useState(80); // Default value

    useEffect(() => {
        fetch('https://api.github.com/users/AbdulQuayyum')
            .then(response => response.json())
            .then(data => {
                if (data.public_repos) {
                    setRepoCount(data.public_repos);
                }
            })
            .catch(error => console.error('Error fetching GitHub repos:', error));
    }, []);

    return (
        <div className='about-info main-grid'>
            <div className="about-box dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
                < BsAward className='about-icon dark:text-[#fff]' />
                <h3 className="about-title dark:text-[#fff]">Experience</h3>
                <span className="about-subtitle dark:text-[#fff]">{yearsOfExperience} Years+</span>
            </div>
            <div className="about-box dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
                < BsBriefcase className="about-icon dark:text-[#fff]" />
                <h3 className="about-title dark:text-[#fff]">Completed</h3>
                <span className="about-subtitle dark:text-[#fff]">{repoCount}+ Projects</span>
            </div>
            <div className="about-box dark:bg-transparent dark:border-[#fff] dark:border-[1px]">
                <BsHeadset className="about-icon dark:text-[#fff]" />
                <h3 className="about-title dark:text-[#fff]">Support</h3>
                <span className="about-subtitle dark:text-[#fff]">18 Hours a day</span>
            </div>
        </div>
    )
}

export default Info
