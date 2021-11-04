export type CellTypes = 'code' | 'text';
export type NodeTypes = 'file' | 'folder';


export interface File {
  name: string
  nodeId: string;
  nodeType: 'file';
  code: string;
  text: string;
}

export interface Folder {
  name: string
  nodeId: string;
  nodeType: 'folder';
  files: File[] | null;
}
