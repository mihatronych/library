import {makeAutoObservable} from "mobx";

export default class PublicationStore {
    constructor() {
        this._types = [
            {id: 1, name: "Статья"},
            {id: 2, name: "Роман"},
        ]
        this._themes = [
            {id:1, name: "Компьютерные науки"},
            {id:2, name: "Экзорцизм"}
        ]
        this._regions = [
            {id:1, name: "Азия"},
            {id:2, name: "Европа"}
        ]
        this._publicators = [
            {id:1, name:"АСТ_2", link:"www.link2.com", address:"г.Н, ул. Ленина, д.6"},
            {id:2, name:"АСТ_1", link:"www.link1.com", address:"г.Н, ул. Ленина, д.7"},
        ]
        this._dialects = [
            {id:1, name: "Южнорусский", languageId:"1"},
            {id:2, name: "Севернорусский", languageId:"1"},
            {id:3, name: "Словацкий", languageId:"2"},
            {id:4, name: "Чешский", languageId:"2"}
        ]
        this._authors = [
            {id: 1, name: "user", email: "user@mail.ru", password: "$2b$05$sl56GEDxtZcyU3F.JOCWi.SLo7CCvg0z0EpGaDVhAQzOvgDRlccLa"},
            {id: 2, name: "user2", email: "user2@mail.ru", password: "$2b$05$sl56GEDxtZcyU3F.JOCWi.SLo7CCvg0z0EpGaDVhAQzOvgDRlccLa"},
        ]
        this._publications = [
            {id: 1, title: "Different1", short_review: "Different1 content1", pages: 10,
                date_publ: "2019-12-31T19:00:00.000Z", date_create: "2019-12-31T19:00:00.000Z", authorId: 1, regionId: 1,
                publicatorId: 1, typeId: 1, dialectId: 2, themeId: 2, file: "b532aede-4679-4d11-9fbc-5dc0d9394415.txt",},
            {id: 2, title: "Different2", short_review: "Different2 content2", pages: 20,
                date_publ: "2019-12-31T19:00:00.000Z", date_create: "2019-12-31T19:00:00.000Z", authorId: 1, regionId: 1,
                publicatorId: 2, typeId: 2, dialectId: 3, themeId: 2, file: "b532aede-4679-4d11-9fbc-5dc0d9394415.txt",},
            {id: 3, title: "Different3", short_review: "Different3 content3", pages: 30,
                date_publ: "2019-12-31T19:00:00.000Z", date_create: "2019-12-31T19:00:00.000Z", authorId: 2, regionId: 2,
                publicatorId: 1, typeId: 1, dialectId: 4, themeId: 1, file: "b532aede-4679-4d11-9fbc-5dc0d9394415.txt",},
            {id: 4, title: "Different4", short_review: "Different4 content4", pages: 40,
                date_publ: "2019-12-31T19:00:00.000Z", date_create: "2019-12-31T19:00:00.000Z", authorId: 2, regionId: 2,
                publicatorId: 2, typeId: 2, dialectId: 2, themeId: 2, file: "b532aede-4679-4d11-9fbc-5dc0d9394415.txt",},
        ]
        makeAutoObservable(this)
    }

    setTypes(types){
        this._isAuth = types
    }
    setThemes(themes){
        this._themes = themes
    }
    setRegions(regions){
        this._regions = regions
    }
    setPublicators(publicators){
        this._publicators = publicators
    }
    setDialects(dialects){
        this._dialects = dialects
    }
    setAuthors(authors){
        this._authors = authors
    }
    setPublications(publications){
        this._publications = publications
    }

    get types(){
        return this._types
    }
    get themes(){
        return this._themes
    }
    get regions(){
        return this._regions
    }
    get publicators(){
        return this._publicators
    }
    get dialects(){
        return this._dialects
    }
    get authors(){
        return this._authors
    }
    get publications(){
        return this._publications
    }
}