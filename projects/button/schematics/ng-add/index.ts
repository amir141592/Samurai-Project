import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function ngAdd(): Rule {
  return (tree: Tree, context: SchematicContext) => {
    context.addTask(new NodePackageInstallTask());

    const content: Buffer | null = tree.read('./src/styles.scss');
    let content2Append = `.samurai-button {
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				border: none;
				transition: all 0.4s ease-in;
				z-index: 1;
				background-color: transparent;
				overflow: hidden;
				font-size: 1.25vw;
				cursor: pointer;

				.samurai-before {
					position: absolute;
					z-index: -1;
				}
			}
			
			.samurai-text-underline:hover {
				text-decoration: underline;
			}
			
			// ? LEFT_TO_RIGHT
			.samurai-left-to-right .samurai-before {
				top: 0;
				left: 0;
				height: 100%;
				width: 0%;
				transition: all 0.2s ease-in;
			}
			
			.samurai-left-to-right:hover .samurai-before {
				width: 100%;
			}
			
			// ? SHUTTER_UP
			.samurai-shutter-up .samurai-before {
				width: 100%;
				height: 0%;
				left: 0;
				top: 0;
				transition: all 0.2s ease-in;
			}
			
			.samurai-shutter-up:hover .samurai-before {
				height: 100%;
			}
			
			// ? SHUTTER_DOWN
			.samurai-shutter-down .samurai-before {
				width: 100%;
				height: 0%;
				left: 0;
				bottom: 0;
				transition: all 0.2s ease-in;
			}
			
			.samurai-shutter-down:hover .samurai-before {
				height: 100%;
			}
			
			// ? DISABLED
			.samurai-disabled {
				position: absolute;
				width: 100%;
				height: 100%;
				z-index: 2;
				background-color: hsla(0, 0%, 50%, 0.6);
			}\n`;

    let strContent: string = '';

    if (content) {
      strContent = content.toString();

      if (!strContent.includes('@import "@material-design-icons/font"'))
        content2Append =
          '@import "@material-design-icons/font";\n' + content2Append;

      tree.overwrite('./src/styles.scss', content2Append + strContent);
    }

    return tree;
  };
}
