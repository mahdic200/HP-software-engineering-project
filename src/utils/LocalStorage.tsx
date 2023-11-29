export const importantLocalItems: string[] = ['token', 'user', 'userPermissions'];


export class LocalStorage {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

export class LocalSet extends LocalStorage {
    constructor(name: string) {
        super(name);
    }

    setItem(value: any) {
        localStorage.setItem(this.name, value);
    }

    setObject(value: Object) {
        localStorage.setItem(this.name, JSON.stringify(value));
    }
}

export class UpdateLocalObject extends LocalStorage {
    id: string | number;
    newChildObject: Object;
    constructor(name: string, id: string | number, newChildObject: Object) {
        super(name);
        this.id = id;
        this.newChildObject = newChildObject;
        this.update();
    }

    update() {
        let localObject = (new LocalGet(this.name)).getObject();
        for (const [key, value] of Object.entries(localObject)) {
            if ((value as any).id == this.id) {
                for (const [childKey] of Object.entries(this.newChildObject)) {
                    if (localObject[key][childKey]) {
                        localObject[key][childKey] = (this.newChildObject as any)[childKey];
                    }
                }
                break;
            }
        }
        (new LocalSet(this.name)).setObject({...localObject});
    }
}

export class LocalGet extends LocalStorage{
    constructor(name: string) {
        super(name);
    }

    getItem() {
        return localStorage.getItem(this.name);
    }

    getObject() {
        return JSON.parse(localStorage.getItem(this.name)!);
    }
}

export const getLocalItem = (name: string, isObject: boolean = false) => {
    let localGet = new LocalGet(name);
    if (isObject) {
        return localGet.getObject()
    } else {
        return localGet.getItem()
    }
};

export const setLocalItem = (name: string, value: any, isObject: boolean = false) => {
    let localSet = new LocalSet(name);
    if (isObject) {
        return localSet.setObject(value)
    } else {
        return localSet.setItem(value)
    }
};

export const removeLocalItem = (name: string) => {
    localStorage.removeItem(name);
};

export const updateLocalObject = (name: string, id: string | number, value: any) => {
    new UpdateLocalObject(name, id, value)
};

export const clearLocalStorage = () => {
    for (var i = 0; i < localStorage.length; ++i) {
        var key: any = localStorage.key(i);
        if (!importantLocalItems.includes(key)) {
            localStorage.removeItem(key);
        }
    }
};