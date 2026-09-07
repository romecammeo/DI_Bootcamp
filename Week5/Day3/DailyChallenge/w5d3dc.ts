function validateUnionType(
    value: any,
    allowedTypes: string[]
): boolean {
    const valueType = typeof value;

    for (const allowedType of allowedTypes) {
        if (valueType === allowedType) {
            return true;
        }
    }

    return false;
}