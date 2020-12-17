export default function selectionFilter({series, films}){
    return {
        series : [
            {title: 'Phim tài liệu', data: series.filter((item)=>item.genre === 'Phim tài liệu')},

            {title: 'Phim hài', data: series.filter((item)=>item.genre === 'Phim hài')},

            {title: 'Trẻ em', data: series.filter((item)=>item.genre === 'Trẻ em')},

            {title: 'Tội ác', data: series.filter((item)=>item.genre === 'Tội ác')},

            {title: 'Feel Good', data: series.filter((item)=>item.genre === 'feel-good')},
        ],
        films:[
            {title: 'Drama', data: films.filter((item)=>item.genre === 'drama')},

            {title: 'Phim kinh dị', data: films.filter((item)=>item.genre === 'thriller')},

            {title: 'Trẻ em', data: films.filter((item)=>item.genre === 'Trẻ em')},

            {title: 'Phim gây cấn', data: films.filter((item)=>item.genre === 'suspense')},

            {title: 'Phim Lãng mạn', data: films.filter((item)=>item.genre === 'Lãng mạn')},
        ]
    }
}