export default function selectionFilter({series, films}){
    return {
        series : [
            {title: 'Phim tài liệu', data: series.filter((item)=>item.genre === 'documentaries')},

            {title: 'Phim hài ', data: series.filter((item)=>item.genre === 'comedies')},

            {title: 'Trẻ em', data: series.filter((item)=>item.genre === 'children')},

            {title: 'Tội ác', data: series.filter((item)=>item.genre === 'crime')},

            {title: 'Feel Good', data: series.filter((item)=>item.genre === 'feel-good')},
        ],
        films:[
            {title: 'Drama', data: films.filter((item)=>item.genre === 'drama')},

            {title: 'Phim kinh dị', data: films.filter((item)=>item.genre === 'thriller')},

            {title: 'Trẻ em', data: films.filter((item)=>item.genre === 'children')},

            {title: 'Phim gây cấn', data: films.filter((item)=>item.genre === 'suspense')},

            {title: 'Phim Lãng mạn', data: films.filter((item)=>item.genre === 'romance')},
        ]
    }
}