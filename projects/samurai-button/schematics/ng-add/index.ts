import { Rule, SchematicContext, Tree } from '@angular-devkit/schematics';
import { NodePackageInstallTask } from '@angular-devkit/schematics/tasks';

export function ngAdd(options: any): Rule {
	return (tree: Tree, context: SchematicContext) => {
		context.addTask(new NodePackageInstallTask());

		if (options.installIcon) {
			const content: Buffer | null = tree.read('./src/styles.scss');
			const content2Append = '@import "@material-design-icons/font";\n';

			let strContent: string = '';

			if (content) {
				strContent = content.toString();

				if (!strContent.includes('@import "@material-design-icons/font"')) tree.overwrite('./src/styles.scss', content2Append + strContent);
			}
		}

		return tree;
	};
}
