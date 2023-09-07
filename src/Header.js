
import React, { useState } from 'react';

const Header = ({ handleSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <header>
      <div className="logo"></div>
      <img src='https://in.images.search.yahoo.com/images/view;_ylt=Awr1SZZUxflkrGAHSQC9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzMwZmFhMDJiZDNkMDA0ZTIzYzYyOWZkM2NjZWYwZDViBGdwb3MDNgRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dvideo%2Bsearch%2Bwebsite%2Blogo%26ei%3DUTF-8%26type%3DE211IN826G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D6&w=512&h=512&imgurl=cdn4.iconfinder.com%2Fdata%2Ficons%2Fflat-rounded-seo-icons%2F80%2Fvideo-search-512.png&rurl=https%3A%2F%2Fwww.iconfinder.com%2Ficons%2F454004%2Ffile_search_video_extension_paper_icon&size=29.5KB&p=video+search+website+logo&oid=30faa02bd3d004e23c629fd3ccef0d5b&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=File%2C+search%2C+video%2C+extension%2C+paper+icon+-+Download+on+Iconfinder&b=0&ni=160&no=6&ts=&tab=organic&sigr=FFXPK_8JHr8h&sigb=RqipiQqatnKD&sigi=rR0QD561b.HR&sigt=eDzzPWKepV9s&.crumb=M0Y2ec0AULw&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211IN826G0'></img>
      <input
        className='search-input'
        type="text"
        placeholder="Search..."
        value={searchQuery}
        onChange={handleChange}
      />
      <img src="https://in.images.search.yahoo.com/images/view;_ylt=Awr1SZZUxflkrGAHSgC9HAx.;_ylu=c2VjA3NyBHNsawNpbWcEb2lkAzVmZmQwMTRlYzdmYzUwNDZmZGI5N2VhOTQ5NmY0NGY0BGdwb3MDNwRpdANiaW5n?back=https%3A%2F%2Fin.images.search.yahoo.com%2Fsearch%2Fimages%3Fp%3Dvideo%2Bsearch%2Bwebsite%2Blogo%26ei%3DUTF-8%26type%3DE211IN826G0%26fr%3Dmcafee%26fr2%3Dp%253As%252Cv%253Ai%252Cm%253Asb-top%26tab%3Dorganic%26ri%3D7&w=600&h=557&imgurl=www.clker.com%2Fcliparts%2F4%2Fz%2FM%2Fs%2FI%2F5%2Fsearch-icon-hi.png&rurl=http%3A%2F%2Fwww.clker.com%2Fclipart-search-icon-5.html&size=43.8KB&p=video+search+website+logo&oid=5ffd014ec7fc5046fdb97ea9496f44f4&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&fr=mcafee&tt=Search+Icon+Clip+Art+at+Clker.com+-+vector+clip+art+online%2C+royalty+...&b=0&ni=160&no=7&ts=&tab=organic&sigr=fL2dv1H.K5r9&sigb=guWzaBJH8WJ2&sigi=1kRvwjxWwHeM&sigt=NhHZ7AFrvC3l&.crumb=M0Y2ec0AULw&fr=mcafee&fr2=p%3As%2Cv%3Ai%2Cm%3Asb-top&type=E211IN826G0" alt="Profile" />
    </header>
  );
};

export default Header;
