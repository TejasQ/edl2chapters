#!/usr/bin/env node

import { join } from "path";
import { readFileSync } from "fs";
import { edl2chapters } from "./edl2chapters";

const filePath = join(process.cwd(), process.argv[2]);
const fileContent = readFileSync(filePath, 'utf-8');
edl2chapters(fileContent).then(console.log);