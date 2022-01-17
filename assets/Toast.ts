import { _decorator, instantiate, resources, Prefab, Label, tween, Vec3, Node } from 'cc';

export var showToast = function (node: Node, content: string) {
    let runningScene = node
    let item = runningScene.getChildByName("TOAST");
    if (!item) {
        resources.load<Prefab>("prefab/Toast", (err, prefabAsset) => {
            if (err) {
                console.error("showToast:" + err);
            } else {
                let runningScene = node;
                let item = instantiate(prefabAsset)
                item.name = "TOAST";
                item.getChildByName("Text").getComponent(Label).string = content;
                runningScene.addChild(item);
                item.setPosition(0, 0, 0)
                item.scale = new Vec3(0, 0, 0);
                tween(item).to(0.2, { scale: new Vec3(1, 1, 1) }).delay(1.5).call(() => {
                    item.destroy();
                }).start();
                console.log("finish")
            }
        })
    }
}