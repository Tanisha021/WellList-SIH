'use client'
import React, { useState } from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Combobox } from '@headlessui/react';
import { FaSearch } from 'react-icons/fa'

const ProfileCreation = () => {
  const [location, setLocation] = useState('');
  const [role, setRole] = useState('');
  const [experience, setExperience] = useState('');
  const [isStudent, setIsStudent] = useState(null);
  const [jobTitle, setJobTitle] = useState('');
  const [company, setCompany] = useState('');
  const [linkedin, setLinkedin] = useState('');
  const [website, setWebsite] = useState('');
  const [school, setSchool] = useState('');
  const [gradMonth, setGradMonth] = useState('');
  const [gradYear, setGradYear] = useState(''); 
  const [studyField, setStudyField] = useState('');
  const [query, setQuery] = useState('');
  
  const locations = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix','India'];

  const filteredLocations = query === '' ? locations : locations.filter((loc) =>
    loc.toLowerCase().includes(query.toLowerCase())
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log({
      location, role, experience, isStudent, jobTitle, company, linkedin, website, school, gradMonth, gradYear, studyField
    });
  };

  return (
    <Card className="w-full max-w-2xl mx-auto my-20">
      <CardHeader>
        <CardTitle>Create Your Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2 " required>
              <Label htmlFor="location">Where do you belong?</Label>

              <Combobox as="div" value={location} onChange={setLocation}>
                  <div className="relative">
                      <Combobox.Input
                        id="location"
                        placeholder="Search for your location"
                        onChange={(e) => setQuery(e.target.value)}
                        className="w-full border rounded-md pl-10 pr-4 py-1.5"
                        required
                      />
                      <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                    </div>
                  <Combobox.Options>
                    {filteredLocations.map((loc) => (
                      <Combobox.Option key={loc} value={loc}>
                        {({ active }) => (
                          <div
                            className={`p-2 rounded-sm text-sm ${active ? 'bg-blue-400 text-white' : 'bg-white'}`}
                          >
                            {loc}
                          </div>
                        )}
                      </Combobox.Option>
                    ))}
                  </Combobox.Options>
              </Combobox>

          </div>

          <div className="space-y-2" required>
            <Label htmlFor="role">What role do you do best?</Label>
            <Select onValueChange={setRole} value={role}>
              <SelectTrigger id="role">
                <SelectValue placeholder="Select a role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="developer">Developer</SelectItem>
                <SelectItem value="designer">Designer</SelectItem>
                <SelectItem value="manager">Manager</SelectItem>
                {/* Add more roles as needed */}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2" required>
            <Label htmlFor="experience">Years of experience</Label>
            <Select onValueChange={setExperience} value={experience}>
              <SelectTrigger id="experience">
                <SelectValue placeholder="Select years of experience" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0-1">0-1 years</SelectItem>
                <SelectItem value="1-3">1-3 years</SelectItem>
                <SelectItem value="3-5">3-5 years</SelectItem>
                <SelectItem value="5+">5+ years</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2" required>
            <Label>Are you a student?</Label>
            <div className="flex space-x-4">
              <Button
                variant={isStudent === true ? "solid" : "outline"}
                onClick={() => setIsStudent(true)}
              >
                Yes
              </Button>
              <Button
                variant={isStudent === false ? "solid" : "outline"}
                onClick={() => setIsStudent(false)}
              >
                No
              </Button>
            </div>
          </div>

          {isStudent === true && (
            <>
              <div className="space-y-2">
                <Label htmlFor="school">What school are you currently attending (or did you recently graduate from)?</Label>
                <Input
                  id="school"
                  placeholder="Search for a school"
                  value={school}
                  onChange={(e) => setSchool(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="gradMonth">Graduation Month</Label>
                <Select onValueChange={setGradMonth} value={gradMonth}>
                  <SelectTrigger id="gradMonth">
                    <SelectValue placeholder="Select month" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="January">January</SelectItem>
                    <SelectItem value="February">February</SelectItem>
                    <SelectItem value="March">March</SelectItem>
                    <SelectItem value="April">April</SelectItem>
                    <SelectItem value="May">May</SelectItem>
                    <SelectItem value="June">June</SelectItem>
                    <SelectItem value="July">July</SelectItem>
                    <SelectItem value="August">August</SelectItem>
                    <SelectItem value="September">September</SelectItem>
                    <SelectItem value="October">October</SelectItem>
                    <SelectItem value="November">November</SelectItem>
                    <SelectItem value="December">December</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="gradYear">Graduation Year</Label>
                <Select onValueChange={setGradYear} value={gradYear}>
                  <SelectTrigger id="gradYear">
                    <SelectValue placeholder="Select year" />
                  </SelectTrigger>
                  <SelectContent>
                    {Array.from({ length: 20 }, (_, i) => (
                      <SelectItem key={i} value={String(2024 + i)}>
                        {2024 + i}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="studyField">What are you studying?</Label>
                <Input
                  id="studyField"
                  placeholder="Your field of study"
                  value={studyField}
                  onChange={(e) => setStudyField(e.target.value)}
                />
              </div>
            </>
          )}

          {isStudent === false && (
            <>
              <div className="flex space-x-4">
                <div className="space-y-2 w-1/2">
                  <Label htmlFor="jobTitle">Current Job Title</Label>
                  <Input
                    id="jobTitle"
                    placeholder="Your current job title"
                    value={jobTitle}
                    onChange={(e) => setJobTitle(e.target.value)}
                  />
                </div>
                <div className="space-y-2 w-1/2">
                  <Label htmlFor="company">Company Name</Label>
                  <Input
                    id="company"
                    placeholder="Your current company"
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                  />
                </div>
              </div>
            </>
          )}

          <div className=" p-4 rounded-lg shadow-lg w-full border border-gray-200 bg-gray-100 " required>
            <div className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="linkedin">LinkedIn Profile</Label>
                <Input
                  id="linkedin"
                  placeholder="https://linkedin.com/in/"
                  value={linkedin}
                  onChange={(e) => setLinkedin(e.target.value)}
                  // className="border rounded-lg p-2 w-full bg-purple-100 hover:bg-purple-200"
                  className="border rounded-lg p-2 w-full"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="website">Your Website</Label>
                <Input
                  id="website"
                  placeholder="https://mypersonalwebsite.com"
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                  className="border rounded-lg p-2 w-full"
                />
              </div>
            </div>
          </div>


          <Button type="submit">Next</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileCreation;