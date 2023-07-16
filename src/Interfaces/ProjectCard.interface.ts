export default interface ProjectCardInterface {
    index              : number
    name               : string;
    description        : string;
    tags               : Array<TagsInterface>;
    image              : string;
    repositoryLink     : string;
}

interface TagsInterface {
    name      : string;
    color     : string;
}